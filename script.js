const LOGIN_KEY = "skillsharehub_loggedin";
const USER_KEY = "skillsharehub_user";
const USERS_DB_KEY = "skillsharehub_users";

const CATEGORIES = [
  { name:"Programming", skills:[{ name:"JavaScript", benefit:"Great for web development." },{ name:"Python", benefit:"Popular for AI and data science." },{ name:"Java", benefit:"Used in enterprise and Android apps." }] },
  { name:"Design", skills:[{ name:"Graphic Design", benefit:"Enhances branding." },{ name:"UI/UX", benefit:"Improves user experience." }] },
  { name:"Business", skills:[{ name:"Marketing", benefit:"Boosts product visibility." },{ name:"Entrepreneurship", benefit:"Helps build startups." }] },
];

function $(sel, root = document) { return root.querySelector(sel); }
function $all(sel, root = document) { return root.querySelectorAll(sel); }
function getUser() { return localStorage.getItem(USER_KEY) || "Guest"; }

// --- AUTHENTICATION HELPERS ---
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
function getUsersDB() { return JSON.parse(localStorage.getItem(USERS_DB_KEY) || "[]"); }
function saveUsersDB(db) { localStorage.setItem(USERS_DB_KEY, JSON.stringify(db)); }

// --- CORE LOGIC & UI ---
function initThemeSwitcher() {
  const themeToggle = $('#themeToggle');
  if (!themeToggle) return;
  const themeKey = 'skillsharehub_theme';
  const applyTheme = (theme) => {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    themeToggle.querySelector('i').className = `fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`;
  };
  const loadTheme = () => {
    let savedTheme = localStorage.getItem(themeKey) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);
  };
  themeToggle.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    localStorage.setItem(themeKey, newTheme);
    applyTheme(newTheme);
  });
  loadTheme();
}

function requireLogin() {
  if (!["login", "register"].includes(document.body.dataset.page) && localStorage.getItem(LOGIN_KEY) !== "true") {
    location.href = "login.html";
    return false;
  }
  return true;
}

function setActiveNav() {
  const page = document.body.dataset.page;
  if (!page) return;
  $all('.nav a, .profile-link').forEach(a => {
    a.classList.toggle('active', a.dataset.nav === page);
  });
}

function attachHeaderUser() {
  if (["login", "register"].includes(document.body.dataset.page)) return;
  $('#welcomeUser').textContent = "Welcome, " + getUser();
  $('#logoutBtn').addEventListener("click", () => {
    localStorage.removeItem(LOGIN_KEY);
    localStorage.removeItem(USER_KEY);
    location.href = "login.html";
  });
}

// --- GENERATIVE CHATBOT (GEMINI API) ---
function initGenerativeChatbot() {
    if (["login", "register"].includes(document.body.dataset.page) || $("#chatToggle")) return;
    const btn = document.createElement("button");
    btn.id = "chatToggle"; btn.className = "chat-toggle";
    btn.innerHTML = '<i class="fa-solid fa-message"></i>';
    document.body.appendChild(btn);
    const win = document.createElement("div");
    win.id = "chatWindow"; win.className = "chat-window";
    win.innerHTML = `<div class="chat-header"><div class="chat-title"><i class="fa-solid fa-robot"></i> SkillShare Assistant</div><button class="chat-close" aria-label="Close">&times;</button></div><div class="chat-body" id="chatBody"></div><form class="chat-input" id="chatForm"><input type="text" id="chatText" placeholder="Ask about skills or the site..." autocomplete="off" /><button class="btn primary" type="submit" id="chatSubmit">Send</button></form>`;
    document.body.appendChild(win);
    const chatBody = $("#chatBody"), chatForm = $("#chatForm"), chatText = $("#chatText"), chatSubmit = $("#chatSubmit");
    const addMessage = (role, text) => {
        const bubble = document.createElement("div");
        bubble.className = `bubble ${role}`;
        const inner = document.createElement('div');
        inner.className = 'bubble-inner';
        inner.textContent = text;
        bubble.appendChild(inner);
        chatBody.appendChild(bubble);
        chatBody.scrollTop = chatBody.scrollHeight;
        return bubble;
    };
    const handleChatSubmit = async (e) => {
        e.preventDefault();
        const userMessage = chatText.value.trim();
        if (!userMessage) return;
        addMessage('user', userMessage);
        chatText.value = '';
        chatSubmit.disabled = true;
        const thinkingBubble = addMessage('bot', 'Thinking...');
        const systemPrompt = `You are a helpful assistant for SkillShareHub, a website for learning skills like Programming (JavaScript, Python), Design, Business, etc. Answer questions about the website, explain skill benefits, and be friendly and concise.`;
        
        // =================================================================
        // IMPORTANT: Add your Gemini API Key here for the chatbot to work.
        // =================================================================
        const apiKey = ''; // <-- PASTE YOUR GEMINI API KEY HERE
        if (!apiKey) {
            thinkingBubble.querySelector('.bubble-inner').textContent = "The site administrator has not configured the API Key.";
            chatSubmit.disabled = false;
            return;
        }
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
        try {
            const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ contents: [{ parts: [{ text: userMessage }] }], systemInstruction: { parts: [{ text: systemPrompt }] } }) });
            if (!response.ok) throw new Error(`API Error: ${response.status}`);
            const result = await response.json();
            thinkingBubble.querySelector('.bubble-inner').innerHTML = (result.candidates[0]?.content?.parts[0]?.text || "Sorry, I can't answer that.").replace(/\n/g, '<br>');
        } catch (error) {
            thinkingBubble.querySelector('.bubble-inner').textContent = "Sorry, I'm having trouble connecting.";
        } finally {
            chatSubmit.disabled = false;
        }
    };
    chatForm.addEventListener("submit", handleChatSubmit);
    win.querySelector(".chat-close").addEventListener("click", () => win.classList.remove("open"));
    btn.addEventListener("click", () => win.classList.toggle("open"));
}

// --- PAGE INITIALIZERS ---
function initRegister() {
    if (localStorage.getItem(LOGIN_KEY) === "true") { location.href = "index.html"; return; }
    const form = $("#registerForm");
    if (!form) return;
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const user = $("#username").value.trim();
        const pass = $("#password").value.trim();
        const state = $("#stateSelect").value;
        if (!user || pass.length < 4) { alert("Username is required and password must be at least 4 characters."); return; }
        if (getUsersDB().find(u => u.username === user)) { alert("Username already exists."); return; }
        
        const usersDB = getUsersDB();
        usersDB.push({ username: user, password: await hashPassword(pass), state: state });
        saveUsersDB(usersDB);
        alert("Registration successful! You can now log in.");
        location.href = "login.html";
    });
}

function initLogin() {
    if (localStorage.getItem(LOGIN_KEY) === "true") { location.href = "index.html"; return; }
    const form = $("#loginForm");
    if (!form) return;
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const user = $("#username").value.trim();
        const pass = $("#password").value.trim();
        const foundUser = getUsersDB().find(u => u.username === user);
        if (foundUser && foundUser.password === await hashPassword(pass)) {
            localStorage.setItem(LOGIN_KEY, "true");
            localStorage.setItem(USER_KEY, user);
            location.href = "index.html";
        } else {
            alert("Invalid username or password.");
        }
    });
}

function initProfile() {
    const username = getUser();
    if (username === "Guest") { location.href = 'login.html'; return; }
    const form = $('#profileForm'), statusEl = $('#profileStatus');
    $('#profileUsername').value = username;
    const profileDBKey = `skillsharehub_profile_${username}`;
    const loadProfileData = () => {
        const d = JSON.parse(localStorage.getItem(profileDBKey) || "{}");
        $('#profileEmail').value = d.email || ''; $('#profilePhone').value = d.phone || '';
        $('#profileOccupation').value = d.occupation || ''; $('#profileHobbies').value = d.hobbies || '';
    };
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.setItem(profileDBKey, JSON.stringify({
            email: $('#profileEmail').value.trim(), phone: $('#profilePhone').value.trim(),
            occupation: $('#profileOccupation').value.trim(), hobbies: $('#profileHobbies').value.trim(),
        }));
        statusEl.textContent = 'Profile saved successfully!';
        setTimeout(() => { statusEl.textContent = ''; }, 3000);
    });
    loadProfileData();
    initCommunityMap();
}

function initCommunityMap() {
    const container = $('#community-map-container'), tooltip = $('#map-tooltip');
    if (!container || !tooltip) return;
    const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];
    const stateCounts = {};
    getUsersDB().forEach(user => { if (user.state) stateCounts[user.state] = (stateCounts[user.state] || 0) + 1; });
    
    let mapHTML = '<div class="state-map-wrapper">';
    states.forEach(stateName => {
        const count = stateCounts[stateName] || 0;
        let dClass = 'density-0';
        if (count > 0) dClass = 'density-1'; if (count > 2) dClass = 'density-2';
        if (count > 5) dClass = 'density-3'; if (count > 10) dClass = 'density-4';
        mapHTML += `<div class="state ${dClass}" data-name="${stateName}" data-count="${count}">${stateName}</div>`;
    });
    container.innerHTML = mapHTML + '</div>';

    $all('.state', container).forEach(el => {
        el.addEventListener('mousemove', (e) => {
            tooltip.innerHTML = `<strong>${el.dataset.name}</strong><br>${el.dataset.count} user(s)`;
            tooltip.style.opacity = '1'; tooltip.style.left = `${e.pageX + 15}px`; tooltip.style.top = `${e.pageY - 15}px`;
        });
        el.addEventListener('mouseleave', () => { tooltip.style.opacity = '0'; });
    });
}

// --- Other Page Initializers ---
function initHome() {}
function renderCategories() {
    const host = $("#categoriesList");
    if(!host) return;
    host.innerHTML = CATEGORIES.map(cat => `<details class="category-item"><summary>${cat.name}</summary><ul>${cat.skills.map(s => `<li><a href="skill.html?name=${encodeURIComponent(s.name)}" class="skill">${s.name}</a></li>`).join('')}</ul></details>`).join('');
}
function setupSearch() {
    const input = $("#skillSearch");
    if(!input) return;
    input.addEventListener("input", () => {
        const term = input.value.toLowerCase();
        $all(".category-item").forEach(d => {
            let hasMatch = false;
            $all("li", d).forEach(li => {
                const match = li.textContent.toLowerCase().includes(term);
                li.style.display = match ? "" : "none";
                if(match) hasMatch = true;
            });
            d.style.display = (hasMatch || term === "") ? "" : "none";
            if(term && hasMatch) d.open = true;
        });
    });
}
function initPost() {
    const form = $("#postForm"), list = $("#postList");
    if (!form || !list) return;
    const POSTS_KEY = "skillsharehub_posts";
    const posts = JSON.parse(localStorage.getItem(POSTS_KEY) || "[]");
    const render = () => { list.innerHTML = posts.slice().reverse().map(p => `<li><strong>${p.title}</strong><div>${p.body}</div></li>`).join(""); }
    render();
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = $("#postTitle").value.trim(), body = $("#postBody").value.trim();
        if (!title || !body) return;
        posts.push({ title, body, ts: Date.now() });
        localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
        form.reset();
        render();
    });
}

// --- MAIN EXECUTION ---
document.addEventListener("DOMContentLoaded", () => {
  if (!requireLogin()) return;
  const page = document.body.dataset.page;
  initThemeSwitcher();
  initGenerativeChatbot(); 
  setActiveNav();
  attachHeaderUser();
  const pageInitializers = {
      home: initHome,
      browse: () => { renderCategories(); setupSearch(); },
      post: initPost,
      login: initLogin,
      register: initRegister,
      profile: initProfile,
  };
  if (pageInitializers[page]) {
      pageInitializers[page]();
  }
});


