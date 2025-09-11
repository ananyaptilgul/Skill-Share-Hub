const CONSTANTS = {
    LOGIN_KEY: "skillsharehub_loggedin",
    USER_KEY: "skillsharehub_user",
    USERS_DB_KEY: "skillsharehub_users",
    THEME_KEY: "skillsharehub_theme",
    POSTS_KEY: "skillsharehub_posts"
};

const SKILL_CATEGORIES = {

    "Programming": {

        icon: "fa-solid fa-code",

        description: "Build applications, websites, and automate tasks.",

        skills: {

            "Python": { icon: "fa-brands fa-python", desc: "A versatile language for web, data science, and AI.", benefits: ["High demand in jobs", "Beginner-friendly", "Used in AI & ML"], video: "https://www.youtube.com/embed/kqtD5dpn9C8", roadmap: ["Variables & Data Types", "Conditional Logic", "Loops", "Functions", "Lists & Dictionaries"], noteTemplate: "📌 Key Concepts:\n- Variables\n- Functions", recommendations: [{ name: "Java" }, { name: "Machine Learning" }] },

            "Java": { icon: "fa-brands fa-java", desc: "For enterprise apps, Android, and backend systems.", benefits: ["Stable career choice", "Cross-platform", "Large-scale apps"], video: "https://www.youtube.com/embed/UmnCZ7-9yDY", roadmap: ["Syntax & Main Method", "Classes & Objects", "Inheritance", "Collections Framework"], noteTemplate: "📌 Key Concepts:\n- Classes & Objects\n- Inheritance", recommendations: [{ name: "Python" }] },

            "React.js": { icon: "fa-brands fa-react", desc: "A powerful JavaScript library for building user interfaces.", benefits: ["Top choice for frontend jobs", "Component-based architecture", "Strong community support"], video: "https://www.youtube.com/embed/SqcY0GlETPk", roadmap: ["Components & Props", "State & Lifecycle", "Handling Events", "Conditional Rendering", "Introduction to Hooks"], noteTemplate: "📌 Key Concepts:\n- JSX\n- State Management (useState)\n- Components", recommendations: [{ name: "UI/UX Design" }] }

        }

    },

    "Data Science & AI": {

        icon: "fa-solid fa-brain",

        description: "Analyze data and build intelligent systems.",

        skills: {

            "Machine Learning": { icon: "fa-solid fa-robot", desc: "Teach computers to learn from data and make predictions.", benefits: ["High-impact field", "Drives innovation in tech", "Excellent salary potential"], video: "https://www.youtube.com/embed/ukzFI9rgwfU", roadmap: ["Data Preprocessing", "Linear Regression", "Classification Algorithms", "Clustering", "Model Evaluation"], noteTemplate: "📌 Key Concepts:\n- Supervised vs. Unsupervised Learning\n- Training/Testing Data", recommendations: [{ name: "Python" }, { name: "Data Visualization" }] },

            "Data Visualization": { icon: "fa-solid fa-chart-bar", desc: "Turn complex data into insightful and beautiful charts.", benefits: ["Communicate findings effectively", "Essential for business intelligence", "Supports data-driven decisions"], video: "https://www.youtube.com/embed/MiiANxRHSv4", roadmap: ["Principles of good design", "Choosing the right chart type", "Using tools like Tableau/Power BI", "Creating a Dashboard", "Storytelling with Data"], noteTemplate: "📌 Key Concepts:\n- Chart Types (Bar, Line, Scatter)\n- Color Theory\n- Interactivity", recommendations: [{ name: "Machine Learning" }] }

        }

    },

    "Cloud & DevOps": {

        icon: "fa-solid fa-cloud",

        description: "Manage and deploy applications on the cloud.",

        skills: {

            "AWS Fundamentals": { icon: "fa-brands fa-aws", desc: "Learn the basics of Amazon Web Services, the leading cloud platform.", benefits: ["Most in-demand cloud skill", "Scalable infrastructure", "Core for many tech roles"], video: "https://www.youtube.com/embed/_yWbu0Pc32Y", roadmap: ["Understanding Regions & AZs", "EC2 (Virtual Servers)", "S3 (Storage)", "IAM (Security)", "VPC (Networking)"], noteTemplate: "📌 Key Concepts:\n- IaaS, PaaS, SaaS\n- Scalability & Elasticity", recommendations: [{ name: "Docker" }] },

             "Docker": { icon: "fa-brands fa-docker", desc: "Package applications into portable containers for easy deployment.", benefits: ["Consistent environments", "Simplifies deployment", "Essential for modern DevOps"], video: "https://www.youtube.com/embed/3c-iBn73dDE", roadmap: ["What is a Container?", "Writing a Dockerfile", "Building Images", "Running Containers", "Docker Compose Basics"], noteTemplate: "📌 Key Concepts:\n- Images vs. Containers\n- Dockerfile directives", recommendations: [{ name: "AWS Fundamentals" }] }

        }

    },

    "Creative & Design": {

        icon: "fa-solid fa-palette",

        description: "Express your creativity through visual and auditory arts.",

        skills: {

            "Music": { icon: "fa-solid fa-music", desc: "Explore rhythm, melody, and creativity.", benefits: ["Enhances creativity", "Improves focus", "Universal expression"], video: "https://www.youtube.com/embed/rgaTLrZGlk0", roadmap: ["Basic Rhythm", "Major Scales", "Basic Chords", "Melody Construction"], noteTemplate: "📌 Key Concepts:\n- Rhythm & Tempo\n- Scales & Chords", recommendations: [{ name: "Drawing" }] },

            "Drawing": { icon: "fa-solid fa-paintbrush", desc: "Express yourself through sketches and art.", benefits: ["Boosts imagination", "Great stress relief", "Improves observation"], video: "https://www.youtube.com/embed/ewMksAbgdBI", roadmap: ["Basic Shapes", "Proportions", "Shading & Light", "Perspective"], noteTemplate: "📌 Key Concepts:\n- Shapes & Proportions\n- Shading", recommendations: [{ name: "Music" }] },

             "UI/UX Design": { icon: "fa-solid fa-object-group", desc: "Design user-friendly and visually appealing digital products.", benefits: ["Crucial for product success", "Creative and analytical", "High demand in the app/web industry"], video: "https://www.youtube.com/embed/cvm_ECH94x4", roadmap: ["User Personas & Journeys", "Wireframing", "Prototyping with Figma", "Usability Testing", "Design Systems"], noteTemplate: "📌 Key Concepts:\n- User-Centered Design\n- Wireframes vs. Mockups", recommendations: [{ name: "React.js" }] }

        }

    },

    "Business & Finance": {

        icon: "fa-solid fa-briefcase",

        description: "Learn to market, sell, and manage your finances.",

        skills: {

            "Digital Marketing": { icon: "fa-solid fa-chart-line", desc: "Promote brands and products online through various channels.", benefits: ["High demand career", "Measurable results (analytics)", "Crucial for startups"], video: "https://www.youtube.com/embed/BZLUEKnMfIY", roadmap: ["SEO Basics", "Content Marketing", "Social Media Ads", "Email Marketing", "Google Analytics"], noteTemplate: "📌 Key Concepts:\n- SEO & SEM\n- Customer Funnels", recommendations: [{ name: "Data Visualization" }] },

            "Stock Market Basics": { icon: "fa-solid fa-arrow-trend-up", desc: "Understand how to invest in the stock market for wealth creation.", benefits: ["Build long-term wealth", "Understand economic trends", "Make informed financial decisions"], video: "https://www.youtube.com/embed/videoseries?list=PLKLPWIpGjI0OI7w6KXpor4TAni5B2tL6a", roadmap: ["What is a Stock?", "Sensex & Nifty", "How to Read a Stock Chart", "Fundamental vs. Technical Analysis", "Opening a Demat Account"], noteTemplate: "📌 Key Concepts:\n- Bulls vs. Bears\n- Diversification", recommendations: [{ name: "Personal Finance" }] }

        }

    },

    "Essential Life Skills": {

        icon: "fa-solid fa-star",

        description: "Practical skills for everyday life, confidence, and self-sufficiency.",

        skills: {

            "Public Speaking": { icon: "fa-solid fa-microphone", desc: "Communicate your ideas with confidence and clarity.", benefits: ["Boosts confidence", "Improves leadership skills", "Essential for career growth"], video: "https://www.youtube.com/embed/eIho2S0ZahI", roadmap: ["Overcoming Fear", "Structuring Your Speech", "Body Language & Tonality", "Engaging Your Audience", "Handling Q&A"], noteTemplate: "📌 Key Concepts:\n- The 3 'V's: Visual, Vocal, Verbal\n- The importance of a strong opening", recommendations: [{ name: "English Conversation" }] },

            "Personal Finance": { icon: "fa-solid fa-piggy-bank", desc: "Learn to manage your money, budget effectively, and save for the future.", benefits: ["Achieve financial freedom", "Reduce financial stress", "Make informed decisions"], video: "https://www.youtube.com/embed/EsOTfVIcdEI", roadmap: ["Creating a Budget", "Understanding Saving vs. Investing", "Basics of Mutual Funds", "Managing Debt", "The Power of Compounding"], noteTemplate: "📌 Key Concepts:\n- 50/30/20 Budget Rule\n- Assets vs. Liabilities", recommendations: [{ name: "Stock Market Basics" }] },

            "Gardening Basics": { icon: "fa-solid fa-seedling", desc: "Grow your own plants, flowers, or vegetables at home.", benefits: ["Relaxing & therapeutic", "Provides fresh produce/flowers", "Connects you with nature"], video: "https://www.youtube.com/embed/videoseries?list=PL9RtE8Imwa0qAIjmuueQ3-RVbHzrztZ3y", roadmap: ["Choosing Your Plants", "Preparing Pots & Soil", "Planting Techniques", "Watering & Sunlight", "Basic Pest Control"], noteTemplate: "📌 Key Concepts:\n- Know your sunlight direction\n- Don't overwater!", recommendations: [{ name: "Basics of Cooking" }] }

        }

    },

    "Hobbies & Crafts": {

        icon: "fa-solid fa-puzzle-piece",

        description: "Discover new passions and create amazing things with your hands.",

        skills: {

            "Basics of Cooking": { icon: "fa-solid fa-utensils", desc: "Learn fundamental cooking techniques to prepare delicious meals.", benefits: ["Healthier eating habits", "Saves money", "Impress friends and family"], video: "https://www.youtube.com/embed/videoseries?list=PL86562563EF386660", roadmap: ["Essential Knife Skills", "Understanding Heat Control", "Cooking Methods (Sauté, Boil, Roast)", "Balancing Flavors", "Making a Simple Dal"], noteTemplate: "📌 Essential Ingredients:\n- Onions, Ginger, Garlic, Tomatoes\n- Basic Spices", recommendations: [{ name: "Gardening Basics" }] },

            "Mobile Photography": { icon: "fa-solid fa-camera", desc: "Take stunning photos using the camera you always have with you.", benefits: ["Capture memories beautifully", "No expensive gear needed", "Express your creative eye"], video: "https://www.youtube.com/embed/d8EkwAOKtU0", roadmap: ["Understanding Light", "Composition Rules (Rule of Thirds)", "Using Portrait Mode", "Simple Editing with Snapseed/Lightroom", "Finding Interesting Angles"], noteTemplate: "📌 Key Concepts:\n- Look for the light!\n- Clean your lens.", recommendations: [{ name: "Drawing" }] }

        }

    },

    "Health & Wellness": {

        icon: "fa-solid fa-heart-pulse",

        description: "Improve your mental and physical well-being.",

        skills: {

            "Yoga & Mindfulness": { icon: "fa-solid fa-person-praying", desc: "Enhance flexibility, reduce stress, and find inner peace.", benefits: ["Improves physical health", "Reduces anxiety", "Increases focus and clarity"], video: "https://www.youtube.com/embed/4C-gxOE0j7s", roadmap: ["Basic Breathing (Pranayama)", "Sun Salutation (Surya Namaskar)", "Fundamental Poses (Asanas)", "5-Minute Meditation", "Building a Daily Practice"], noteTemplate: "📌 Key Concepts:\n- Focus on the breath\n- Listen to your body", recommendations: [{ name: "Meditation for Beginners" }] },

            "Meditation for Beginners": { icon: "fa-solid fa-om", desc: "Train your mind to achieve a state of calm and emotional stability.", benefits: ["Lowers stress levels", "Improves sleep quality", "Enhances self-awareness"], video: "https://www.youtube.com/embed/inpok4MKVLM", roadmap: ["Finding a Comfortable Posture", "Focusing on Your Breath", "Noticing Thoughts without Judgment", "Body Scan Meditation", "Making it a Habit"], noteTemplate: "📌 Key Idea:\n- Meditation is not about stopping thoughts, but observing them.", recommendations: [{ name: "Yoga & Mindfulness" }] }

        }

    },

    "Language Learning": {

        icon: "fa-solid fa-language",

        description: "Learn new languages to connect with more people.",

        skills: {

            "English Conversation": { icon: "fa-solid fa-comments", desc: "Improve your spoken English for daily and professional communication.", benefits: ["Boosts career opportunities", "Increases confidence", "Connect with people globally"], video: "https://www.youtube.com/embed/5MgBikgcWnY", roadmap: ["Common Greetings & Introductions", "Asking & Answering Questions", "Small Talk Topics", "Pronunciation Practice", "Everyday Vocabulary"], noteTemplate: "📌 Tip:\n- Try thinking in English for a few minutes every day.", recommendations: [{ name: "Public Speaking" }] },

             "Learn Kannada": { icon: "fa-solid fa-k", desc: "Learn the basics of Kannada to connect with the local culture in Karnataka.", benefits: ["Communicate with locals in Bengaluru", "Shows respect for local culture", "Makes daily life easier (shopping, travel)"], video: "https://www.youtube.com/embed/videoseries?list=PLVnqj7zHgqzvUAK9n0nDM5rxY1KjhtxDR", roadmap: ["Basic Greetings (Namaskara, Hegidira)", "Introducing Yourself", "Numbers & Counting", "Common Phrases for Shopping", "Asking for Directions"], noteTemplate: "📌 Key Phrases:\n- Swalpa Kannada Barutte (I know a little Kannada)\n- Dhanyavadagalu (Thank you)", recommendations: [{ name: "English Conversation" }] }

        }

    }

};

const BADGES = {
    pioneer: { name: "Pioneer", icon: "🚀", description: "Joined the community." },
    learner: { name: "Active Learner", icon: "🧠", description: "Earned 10+ points." },
    hotshot: { name: "Hotshot", icon: "🔥", description: "Reached 100+ points." },
    tutor: { name: "Community Tutor", icon: "🧑‍🏫", description: "Listed a teachable skill." },
    explorer: { name: "Explorer", icon: "🗺️", description: "Completed an item in 2+ different categories." },
    specialist: { name: "Specialist", icon: "🎯", description: "Completed the entire roadmap for one skill." },
    polymath: { name: "Polymath", icon: "🏛️", description: "Completed an item in 5+ different skills." },
    sage: { name: "Sage", icon: "🦉", description: "Shared 3+ tips with the community." },
    dedicated: { name: "Dedicated", icon: "🗓️", description: "Maintained a 7-day login streak." }
};

const CHALLENGE_LIST = [
    {
        skill: "Drawing",
        title: "Shading a Sphere",
        description: "Practice your shading! Draw a circle and use shading to make it look like a 3D sphere.",
        points: 50
    },
    {
        skill: "Photography",
        title: "Colors of Your Neighborhood",
        description: "Share a mobile photo that captures a vibrant, interesting color you see every day.",
        points: 40
    },
    {
        skill: "Python",
        title: "List Sorter",
        description: "Write a function that takes a list of numbers and returns only the even numbers, sorted.",
        points: 60
    },
    {
        skill: "Cooking",
        title: "One-Pot Meal Plan",
        description: "Plan a simple, healthy meal that can be cooked in a single pot or pan. Write down the ingredients.",
        points: 50
    },
    {
        skill: "Personal Finance",
        title: "The 50/30/20 Budget",
        description: "Track your spending for one day and categorize each expense into Needs, Wants, or Savings.",
        points: 40
    },
    {
        skill: "Meditation for Beginners",
        title: "Mindful Minute",
        description: "Find a quiet spot and focus only on the sensation of your breath for a full 60 seconds.",
        points: 30
    },
    {
        skill: "Public Speaking",
        title: "Tongue Twister Tuesday",
        description: "Record yourself saying a tricky tongue twister (like 'She sells seashells...') three times fast.",
        points: 40
    },
    {
        skill: "Yoga & Mindfulness",
        title: "Strike a Pose",
        description: "Practice the 'Tree Pose' (Vrikshasana). Try to hold it for 30 seconds on each leg.",
        points: 30
    },
    {
        skill: "Learn Kannada",
        title: "Everyday Objects",
        description: "Learn and write down the Kannada words for five objects you can see in your room right now.",
        points: 50
    },
    {
        skill: "Data Visualization",
        title: "Survey Your Friends",
        description: "Ask 5 friends a simple question (e.g., 'Tea or Coffee?') and draw a simple bar chart of the results.",
        points: 60
    }
];

const LEARNING_PATHS = {
    "Frontend Developer": {
        description: "Master the core technologies of modern web development, from design to deployment.",
        skills: ["UI/UX Design", "React.js", "AWS Fundamentals"]
    },
    "Data Analyst": {
        description: "Learn to extract powerful insights and tell compelling stories from data.",
        skills: ["Python", "Data Visualization", "Machine Learning"]
    },
    "Cloud Practitioner": {
        description: "Understand and manage scalable cloud infrastructure, a crucial skill for modern tech roles.",
        skills: ["AWS Fundamentals", "Docker", "Python"]
    },
    "Digital Content Creator": {
        description: "Build an online presence by creating engaging content and marketing it effectively.",
        skills: ["Mobile Photography", "Digital Marketing", "Public Speaking"]
    },
    "Wellness Journey": {
        description: "A holistic path to improve your mental clarity, physical health, and connection to nature.",
        skills: ["Meditation for Beginners", "Yoga & Mindfulness", "Gardening Basics"]
    },
    "Financial Independence": {
        description: "Gain the knowledge to manage your money wisely and start building long-term wealth.",
        skills: ["Personal Finance", "Stock Market Basics"]
    },
    "Confident Communicator": {
        description: "Master the art of clear and confident communication in any language.",
        skills: ["English Conversation", "Public Speaking"]
    }
};
function $(sel, root = document) { return root.querySelector(sel); }
function $all(sel, root = document) { return root.querySelectorAll(sel); }
function getUser() { return localStorage.getItem(CONSTANTS.USER_KEY) || "Guest"; }
function getDayOfYear() { const now = new Date(); const start = new Date(now.getFullYear(), 0, 0); const diff = now - start; const oneDay = 1000 * 60 * 60 * 24; return Math.floor(diff / oneDay); }

function getSkillByName(skillName) {
    for (const category of Object.values(SKILL_CATEGORIES)) {
        if (category.skills[skillName]) { return category.skills[skillName]; }
    }
    return null;
}
function sendMessage(fromUser, toUser, text) {
    const MESSAGES_KEY = "skillsharehub_messages";
    const messages = JSON.parse(localStorage.getItem(MESSAGES_KEY) || "[]");
    messages.push({
        from: fromUser,
        to: toUser,
        text: text,
        timestamp: new Date().toISOString(),
        read: false
    });
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
}
function deleteConversation(currentUser, otherUser) {
    const MESSAGES_KEY = "skillsharehub_messages";
    let allMessages = JSON.parse(localStorage.getItem(MESSAGES_KEY) || "[]");

    const updatedMessages = allMessages.filter(msg => {
        const isPartOfConvo = (msg.from === currentUser && msg.to === otherUser) || (msg.from === otherUser && msg.to === currentUser);
        return !isPartOfConvo;
    });

    localStorage.setItem(MESSAGES_KEY, JSON.stringify(updatedMessages));
}

async function hashPassword(passwordWithSalt) { const encoder = new TextEncoder(); const data = encoder.encode(passwordWithSalt); const hashBuffer = await crypto.subtle.digest('SHA-256', data); const hashArray = Array.from(new Uint8Array(hashBuffer)); return hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); }
function getUsersDB() { return JSON.parse(localStorage.getItem(CONSTANTS.USERS_DB_KEY) || "[]"); }
function saveUsersDB(db) { localStorage.setItem(CONSTANTS.USERS_DB_KEY, JSON.stringify(db)); }

async function loadCommonComponents() { const headerPlaceholder = document.getElementById('header-placeholder'); const footerPlaceholder = document.getElementById('footer-placeholder'); if (headerPlaceholder) { try { const res = await fetch('_header.html'); if (res.ok) headerPlaceholder.innerHTML = await res.text(); } catch (e) { console.error("Could not load header.", e); } } if (footerPlaceholder) { try { const res = await fetch('_footer.html'); if (res.ok) footerPlaceholder.innerHTML = await res.text(); } catch (e) { console.error("Could not load footer.", e); } } }
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
        const apiKey = 'AIzaSyAOFF07YRupuCF140kBDKOfLHvDsY83-fg';
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

function initThemeSwitcher() { const themeToggle = $('#themeToggle'); if (!themeToggle) return; const applyTheme = (theme) => { document.body.classList.toggle('dark-mode', theme === 'dark'); themeToggle.querySelector('i').className = `fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`; }; const loadTheme = () => { let savedTheme = localStorage.getItem(CONSTANTS.THEME_KEY) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); applyTheme(savedTheme); }; themeToggle.addEventListener('click', () => { const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark'; localStorage.setItem(CONSTANTS.THEME_KEY, newTheme); applyTheme(newTheme); }); loadTheme(); }
function requireLogin() { if (!["login", "register"].includes(document.body.dataset.page) && localStorage.getItem(CONSTANTS.LOGIN_KEY) !== "true") { location.href = "login.html"; return false; } return true; }
function setActiveNav() { const page = document.body.dataset.page; if (!page) return; $all('.nav a, .profile-link').forEach(a => { a.classList.toggle('active', a.dataset.nav === page); }); }
function attachHeaderUser() { if (["login", "register"].includes(document.body.dataset.page)) return; const welcomeUser = $('#welcomeUser'); const logoutBtn = $('#logoutBtn'); if (welcomeUser) { welcomeUser.textContent = `Welcome, ${getUser()}`; } if (logoutBtn) logoutBtn.addEventListener("click", () => { localStorage.removeItem(CONSTANTS.LOGIN_KEY); localStorage.removeItem(CONSTANTS.USER_KEY); location.href = "login.html"; }); }
function updateScore(username, pointsToAdd, reason = "Practice") { const scoreKey = `skillsharehub_score_${username}`; let currentScore = parseInt(localStorage.getItem(scoreKey) || '0'); currentScore += pointsToAdd; localStorage.setItem(scoreKey, currentScore); const scoreLogKey = `skillsharehub_scorelog_${username}`; const scoreLog = JSON.parse(localStorage.getItem(scoreLogKey) || "[]"); scoreLog.push({ points: pointsToAdd, reason, date: new Date().toISOString().split('T')[0] }); localStorage.setItem(scoreLogKey, JSON.stringify(scoreLog)); checkAndAwardBadges(username); }
function checkAndAwardBadges(username) { const profileKey = `skillsharehub_profile_${username}`; const score = parseInt(localStorage.getItem(`skillsharehub_score_${username}`) || "0"); const profile = JSON.parse(localStorage.getItem(profileKey) || "{}"); if (!profile.badges) profile.badges = []; if (!profile.badges.includes("pioneer")) profile.badges.push("pioneer"); if (score >= 10 && !profile.badges.includes("learner")) profile.badges.push("learner"); if (score >= 100 && !profile.badges.includes("hotshot")) profile.badges.push("hotshot"); if (profile.teachableSkills?.length > 0 && !profile.badges.includes("tutor")) profile.badges.push("tutor"); const progress = JSON.parse(localStorage.getItem(`skillsharehub_progress_${username}`) || "{}"); const completedSkills = Object.keys(progress).filter(key => progress[key].length > 0); const completedCategories = new Set(); completedSkills.forEach(skillName => { for (const catName in SKILL_CATEGORIES) { if (SKILL_CATEGORIES[catName].skills[skillName]) { completedCategories.add(catName); } } }); if (completedCategories.size >= 2 && !profile.badges.includes("explorer")) { profile.badges.push("explorer"); } let isSpecialist = false; completedSkills.forEach(skillName => { const skillData = getSkillByName(skillName); if (skillData && progress[skillName].length === skillData.roadmap.length) { isSpecialist = true; } }); if (isSpecialist && !profile.badges.includes("specialist")) { profile.badges.push("specialist"); } localStorage.setItem(profileKey, JSON.stringify(profile)); }

function initRegister() { const form = $("#registerForm"); if (!form) return; form.addEventListener("submit", async (e) => { e.preventDefault(); const user = $("#username").value.trim(); const pass = $("#password").value.trim(); const state = $("#stateSelect")?.value; if (!user || pass.length < 4) { return alert("Username is required and password must be at least 4 characters."); } const usersDB = getUsersDB(); if (usersDB.find(u => u.username === user)) { return alert("Username already exists."); } const salt = crypto.randomUUID(); usersDB.push({ username: user, passwordHash: await hashPassword(pass + salt), salt, state }); saveUsersDB(usersDB); checkAndAwardBadges(user); alert("Registration successful! You can now log in."); location.href = "login.html"; }); }
function initLogin() { const form = $("#loginForm"); if (!form) return; form.addEventListener("submit", async (e) => { e.preventDefault(); const user = $("#username").value.trim(); const pass = $("#password").value.trim(); const foundUser = getUsersDB().find(u => u.username === user); if (foundUser && foundUser.passwordHash === await hashPassword(pass + foundUser.salt)) { localStorage.setItem(CONSTANTS.LOGIN_KEY, "true"); localStorage.setItem(CONSTANTS.USER_KEY, user); location.href = "index.html"; } else { alert("Invalid username or password."); } }); }
function initHome() {
    const user = getUser();
    const scoreKey = `skillsharehub_score_${user}`;
    const scoreEl = $('#weeklyScore');
    const updateScoreDisplay = () => {
        if (scoreEl) scoreEl.textContent = localStorage.getItem(scoreKey) || '0';
    };

    if ($('#profileName')) $('#profileName').textContent = user;
    updateScoreDisplay();

    $('#addScore10')?.addEventListener('click', () => {
        updateScore(user, 10, "Practice");
        updateScoreDisplay();
    });
    $('#resetScore')?.addEventListener('click', () => {
        localStorage.setItem(scoreKey, '0');
        localStorage.setItem(`skillsharehub_scorelog_${user}`, '[]');
        updateScoreDisplay();
    });

    const dayOfYear = getDayOfYear();
    const challengeIndex = dayOfYear % CHALLENGE_LIST.length;
    const currentChallenge = CHALLENGE_LIST[challengeIndex];
    
    const challengeCard = $('#challenge-card');
    if(challengeCard) {
        const skillForChallenge = getSkillByName(currentChallenge.skill) || { icon: 'fa-solid fa-star' };
        challengeCard.querySelector('h3').innerHTML = `<i class="${skillForChallenge.icon}"></i> Daily Challenge`;
        challengeCard.querySelector('#challenge-title').textContent = currentChallenge.title;
        challengeCard.querySelector('p').textContent = currentChallenge.description;
        
        const completeBtn = challengeCard.querySelector('button');
        const profile = JSON.parse(localStorage.getItem(`skillsharehub_profile_${user}`) || "{}");

        if (profile.challengesCompleted?.includes(currentChallenge.title)) {
            completeBtn.textContent = 'Completed Today ✔';
            completeBtn.disabled = true;
        } else {
            completeBtn.textContent = "I've Completed It!";
            completeBtn.disabled = false;
            
            completeBtn.addEventListener('click', () => {
                updateScore(user, currentChallenge.points, "Challenge");
                
                const p = JSON.parse(localStorage.getItem(`skillsharehub_profile_${user}`) || "{}");
                if (!p.challengesCompleted) p.challengesCompleted = [];
                p.challengesCompleted.push(currentChallenge.title);
                localStorage.setItem(`skillsharehub_profile_${user}`, JSON.stringify(p));
                
                completeBtn.textContent = 'Completed Today ✔';
                completeBtn.disabled = true;
                alert(`Challenge completed! +${currentChallenge.points} points awarded.`);
                updateScoreDisplay();
            }, { once: true }); 
        }
    }
}
function initProfile() { const params = new URLSearchParams(window.location.search); const profileUsername = params.get("user") || getUser(); const loggedInUser = getUser(); document.title = `${profileUsername}'s Profile - SkillShareHub`; $('#profileUsername').value = profileUsername; const form = $('#profileForm'); const profileDBKey = `skillsharehub_profile_${profileUsername}`; if (profileUsername !== loggedInUser) { form.style.display = 'none'; $('h2#profile-title').textContent = `${profileUsername}'s Profile`; } const loadProfileData = () => { const d = JSON.parse(localStorage.getItem(profileDBKey) || "{}"); $('#profileEmail').value = d.email || ''; $('#profilePhone').value = d.phone || ''; $('#profileOccupation').value = d.occupation || ''; $('#profileHobbies').value = d.hobbies || ''; $('#profileTeachable').value = (d.teachableSkills || []).join(', '); renderBadges(d.badges || []); renderReviews(d.reviews || []); }; const renderBadges = (badgeKeys = []) => { const container = $('#badges-container'); if (!container) return; if (badgeKeys.length === 0) { container.innerHTML = '<p class="muted">No badges earned yet.</p>'; return; } container.innerHTML = badgeKeys.map(key => { const badge = BADGES[key]; if (!badge) return ''; return `<div class="badge" title="${badge.description}"><span class="badge-icon">${badge.icon}</span><span class="badge-name">${badge.name}</span></div>`; }).join(''); }; const renderReviews = (reviews = []) => { const container = $('#reviews-container'); if (!container) return; let avgRating = reviews.length > 0 ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1) : 'No ratings'; let html = `<h4>Community Reviews (Avg: ${avgRating} ★)</h4>`; if (reviews.length === 0) { html += '<p class="muted">No reviews received yet.</p>'; } else { html += `<ul class="review-list">${reviews.map(r => `<li><strong>${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)} by ${r.from}</strong><p>"${r.comment}"</p></li>`).join('')}</ul>`; } container.innerHTML = html; }; form.addEventListener('submit', (e) => { e.preventDefault(); const profileData = JSON.parse(localStorage.getItem(profileDBKey) || "{}"); profileData.email = $('#profileEmail').value.trim(); profileData.phone = $('#profilePhone').value.trim(); profileData.occupation = $('#profileOccupation').value.trim(); profileData.hobbies = $('#profileHobbies').value.trim(); profileData.teachableSkills = $('#profileTeachable').value.trim().split(',').map(s => s.trim()).filter(s => s); localStorage.setItem(profileDBKey, JSON.stringify(profileData)); checkAndAwardBadges(loggedInUser); loadProfileData(); alert('Profile Saved!'); }); loadProfileData(); initCommunityMap(); }
function initCommunityMap() { const container = $('#community-map-container'), tooltip = $('#map-tooltip'); if (!container || !tooltip) return; const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]; const stateCounts = {}; getUsersDB().forEach(user => { if (user.state) stateCounts[user.state] = (stateCounts[user.state] || 0) + 1; }); const getDensityClass = count => { if (count > 5) return 'density-4'; if (count > 2) return 'density-2'; if (count > 0) return 'density-1'; return 'density-0'; }; container.innerHTML = '<div class="state-map-wrapper">' + states.map(name => `<div class="state ${getDensityClass(stateCounts[name] || 0)}" data-name="${name}" data-count="${stateCounts[name] || 0}">${name}</div>`).join('') + '</div>'; $all('.state', container).forEach(el => { el.addEventListener('mousemove', e => { tooltip.innerHTML = `<strong>${el.dataset.name}</strong><br>${el.dataset.count} user(s)`; tooltip.style.opacity = '1'; tooltip.style.left = `${e.pageX + 15}px`; tooltip.style.top = `${e.pageY - 15}px`; }); el.addEventListener('mouseleave', () => { tooltip.style.opacity = '0'; }); }); }
function initRewards() { const tableBody = $("#leaderboard-table tbody"); if (!tableBody) return; const scores = getUsersDB().map(user => ({ username: user.username, score: parseInt(localStorage.getItem(`skillsharehub_score_${user.username}`) || "0") })).sort((a, b) => b.score - a.score); tableBody.innerHTML = scores.map((user, index) => `<tr><td>${index + 1}</td><td>${user.username}</td><td>${user.score}</td></tr>`).join(''); const badgesContainer = $('#badges-howto-container'); if (badgesContainer) { badgesContainer.innerHTML = Object.values(BADGES).map(badge => `<div class="badge" title="${badge.description}"><span class="badge-icon">${badge.icon}</span><span class="badge-name">${badge.name}</span></div>`).join(''); } }
function initDashboard() { const username = getUser(); const scoreLog = JSON.parse(localStorage.getItem(`skillsharehub_scorelog_${username}`) || "[]"); const progress = JSON.parse(localStorage.getItem(`skillsharehub_progress_${username}`) || "{}"); const pieCtx = document.getElementById('pointsPieChart')?.getContext('2d'); if (pieCtx) { const pointsByReason = scoreLog.reduce((acc, log) => { acc[log.reason] = (acc[log.reason] || 0) + log.points; return acc; }, {}); new Chart(pieCtx, { type: 'pie', data: { labels: Object.keys(pointsByReason), datasets: [{ data: Object.values(pointsByReason), backgroundColor: ['#3b82f6', '#16a34a', '#f59e0b', '#ef4444'] }] } }); } const radarCtx = document.getElementById('progressRadarChart')?.getContext('2d'); if (radarCtx) { const skillLabels = Object.keys(SKILL_CATEGORIES).flatMap(cat => Object.keys(SKILL_CATEGORIES[cat].skills)); const progressData = skillLabels.map(skill => { const roadmap = getSkillByName(skill)?.roadmap || []; const completed = progress[skill] || []; return roadmap.length > 0 ? (completed.length / roadmap.length) * 100 : 0; }); new Chart(radarCtx, { type: 'radar', data: { labels: skillLabels, datasets: [{ label: 'Skill Mastery (%)', data: progressData, fill: true, backgroundColor: 'rgba(59, 130, 246, 0.2)', borderColor: '#3b82f6' }] }, options: { scales: { r: { beginAtZero: true, max: 100 } } } }); } const userProfile = JSON.parse(localStorage.getItem(`skillsharehub_profile_${username}`) || "{}"); const tutorCard = $('#tutor-dashboard-card'); if (tutorCard && userProfile.teachableSkills && userProfile.teachableSkills.length > 0) { tutorCard.style.display = 'block'; const reviews = userProfile.reviews || []; const totalReviews = reviews.length; const avgRating = totalReviews > 0 ? (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1) : 'N/A'; $('#tutor-stats').innerHTML = `<p><strong>Average Rating:</strong> ${avgRating} ★</p><p><strong>Total Reviews Received:</strong> ${totalReviews}</p>`; } }
function initBrowse() {
    const container = $('#browse-container');
    const searchInput = $('#search-input');
    const categoryFilter = $('#category-filter');
    const resetBtn = $('#reset-filters');

    let html = '';
    for (const [categoryName, categoryData] of Object.entries(SKILL_CATEGORIES)) {
        html += `
            <div class="category-section card" data-category="${categoryName}">
                <h2><i class="${categoryData.icon}"></i> ${categoryName}</h2>
                <p class="muted">${categoryData.description}</p>
                <div class="skill-grid">`;
        
        for (const [skillName, skillData] of Object.entries(categoryData.skills)) {
            html += `
                <a href="skill.html?name=${encodeURIComponent(skillName)}" class="skill-card" data-skill-name="${skillName.toLowerCase()}" data-category-name="${categoryName}">
                    <i class="${skillData.icon} fa-2x"></i>
                    <h3>${skillName}</h3>
                    <p>${skillData.desc}</p>
                </a>`;
        }
        html += `</div></div>`;
    }
    container.innerHTML = html;

    const categoryOptions = Object.keys(SKILL_CATEGORIES).map(cat => `<option value="${cat}">${cat}</option>`).join('');
    categoryFilter.innerHTML += categoryOptions;

    const applyFilters = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        $all('.skill-card').forEach(card => {
            const skillName = card.dataset.skillName;
            const categoryName = card.dataset.categoryName;

            const matchesSearch = skillName.includes(searchTerm);
            const matchesCategory = (selectedCategory === 'all' || categoryName === selectedCategory);

            if (matchesSearch && matchesCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        $all('.category-section').forEach(section => {
            const visibleCards = section.querySelectorAll('.skill-card[style*="display: block"]');
            if (visibleCards.length === 0) {
                section.style.display = 'none';
            } else {
                section.style.display = 'block';
            }
        });
    };

    searchInput.addEventListener('input', applyFilters);
    categoryFilter.addEventListener('change', applyFilters);
    resetBtn.addEventListener('click', () => {
        searchInput.value = '';
        categoryFilter.value = 'all';
        applyFilters();
    });
}
function initPost() { const form = $("#postForm"), list = $("#postList"); if (!form || !list) return; const posts = JSON.parse(localStorage.getItem(CONSTANTS.POSTS_KEY) || "[]"); const render = () => { list.innerHTML = posts.slice().reverse().map(p => `<li><strong>${p.title}</strong> (by ${p.author})<p>${p.body}</p></li>`).join(""); }; render(); form.addEventListener("submit", (e) => { e.preventDefault(); const title = $("#postTitle").value.trim(); const body = $("#postBody").value.trim(); if (!title || !body) return; posts.push({ title, body, author: getUser() }); localStorage.setItem(CONSTANTS.POSTS_KEY, JSON.stringify(posts)); form.reset(); render(); }); }
function initPaths() { const container = $('#paths-container'); const userProgress = JSON.parse(localStorage.getItem(`skillsharehub_progress_${getUser()}`) || "{}"); let html = ''; for (const pathName in LEARNING_PATHS) { const path = LEARNING_PATHS[pathName]; let totalRoadmapItems = 0; let completedRoadmapItems = 0; path.skills.forEach(skillName => { const skillData = getSkillByName(skillName); if (skillData) { totalRoadmapItems += skillData.roadmap.length; const skillProgress = userProgress[skillName] || []; completedRoadmapItems += skillProgress.length; } }); const pathProgress = totalRoadmapItems > 0 ? (completedRoadmapItems / totalRoadmapItems) * 100 : 0; html += `<div class="card path-card"><h3>${pathName}</h3><p class="muted">${path.description}</p><div class="path-skills">${path.skills.map(skillName => `<span>${skillName}</span>`).join('')}</div><div class="path-progress"><label>Progress: ${Math.round(pathProgress)}%</label><progress value="${pathProgress}" max="100"></progress></div></div>`; } container.innerHTML = html; }
function initSubmissions() { const dayOfYear = getDayOfYear(); const challengeIndex = dayOfYear % CHALLENGE_LIST.length; const currentChallenge = CHALLENGE_LIST[challengeIndex]; $('#submissions-header').innerHTML = `<h2>Submissions for: ${currentChallenge.title}</h2><p class="muted">${currentChallenge.description}</p>`; const container = $('#submissions-container'); const submissions = JSON.parse(localStorage.getItem('skillsharehub_submissions') || "{}"); const currentSubmissions = submissions[currentChallenge.title] || []; if (currentSubmissions.length === 0) { container.innerHTML = '<p>No submissions yet for today\'s challenge. Be the first!</p>'; return; } container.innerHTML = currentSubmissions.map(sub => `<div class="card submission-card"><a href="${sub.url}" target="_blank" rel="noopener noreferrer"><img src="${sub.url}" alt="User submission" onerror="this.src='https://via.placeholder.com/300?text=View+Submission';" /></a><p>By: <strong>${sub.user}</strong></p></div>`).join(''); }

function initMessages() {
    const MESSAGES_KEY = "skillsharehub_messages";
    const currentUser = getUser();
    const allMessages = JSON.parse(localStorage.getItem(MESSAGES_KEY) || "[]");

    const conversationListEl = $('#conversation-list');
    const chatViewEl = $('#chat-view');

    const conversations = {};
    allMessages.forEach(msg => {
        const otherUser = msg.from === currentUser ? msg.to : msg.from;
        if (msg.to === currentUser || msg.from === currentUser) {
            if (!conversations[otherUser] || new Date(msg.timestamp) > new Date(conversations[otherUser].timestamp)) {
                conversations[otherUser] = msg;
            }
        }
    });

    const renderConversationList = () => {
        const sortedConvos = Object.values(conversations).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        if (sortedConvos.length === 0) {
            conversationListEl.innerHTML = '<p class="muted">No conversations yet.</p>';
            chatViewEl.innerHTML = '<p class="muted">Select a conversation to start chatting.</p>';
            return;
        }
        conversationListEl.innerHTML = sortedConvos.map(msg => {
            const otherUser = msg.from === currentUser ? msg.to : msg.from;
            return `
                <div class="conversation-item" data-user="${otherUser}">
                    <div class="convo-info">
                        <strong>${otherUser}</strong>
                        <p>${msg.text.substring(0, 30)}...</p>
                    </div>
                    <button class="btn-icon delete-btn" data-user="${otherUser}" title="Delete Conversation">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            `;
        }).join('');
    };

    const renderChatHistory = (otherUser) => {
        const history = allMessages
            .filter(msg => (msg.from === currentUser && msg.to === otherUser) || (msg.from === otherUser && msg.to === currentUser))
            .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

        let html = `<h3>Conversation with ${otherUser}</h3>`;
        html += '<div id="message-history" class="message-history">';
        html += history.map(msg => `
            <div class="message-bubble ${msg.from === currentUser ? 'sent' : 'received'}">
                <p>${msg.text.replace(/\\n/g, '<br>').replace(/\\t/g, '&emsp;')}</p>
            </div>
        `).join('');
        html += '</div>';

        html += `
            <form id="reply-form" class="chat-form simple-form">
                <input type="text" id="reply-input" placeholder="Type your reply..." autocomplete="off" required>
                <button type="submit" class="btn primary">Send</button>
            </form>
        `;
        chatViewEl.innerHTML = html;
        
        const messageHistoryEl = $('#message-history');
        if (messageHistoryEl) {
            messageHistoryEl.scrollTop = messageHistoryEl.scrollHeight;
        }

        $('#reply-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const replyInput = $('#reply-input');
            const replyText = replyInput.value.trim();
            if (replyText) {
                sendMessage(currentUser, otherUser, replyText);
                initMessages(); 
                
                setTimeout(() => {
                    const currentConvoEl = conversationListEl.querySelector(`[data-user="${otherUser}"]`);
                    if (currentConvoEl) {
                        currentConvoEl.click();
                    }
                }, 0);
            }
        });
    };

    conversationListEl.addEventListener('click', (e) => {
        const deleteButton = e.target.closest('.delete-btn');
        const conversationItem = e.target.closest('.conversation-item');

        if (deleteButton) {
            e.stopPropagation(); 
            const otherUser = deleteButton.dataset.user;
            
            if (confirm(`Are you sure you want to delete your entire conversation with ${otherUser}? This cannot be undone.`)) {
                deleteConversation(currentUser, otherUser);
                initMessages(); 
            }
        } else if (conversationItem) {
            document.querySelectorAll('.conversation-item').forEach(el => el.classList.remove('active'));
            conversationItem.classList.add('active');
            
            const otherUser = conversationItem.dataset.user;
            renderChatHistory(otherUser);
        }
    });
    renderConversationList();
}

document.addEventListener("DOMContentLoaded", async () => {
    if (!requireLogin()) return;
    await loadCommonComponents();
    
    initGenerativeChatbot(); 
    initThemeSwitcher();
    setActiveNav();
    attachHeaderUser();
    
    const page = document.body.dataset.page;
    const pageInitializers = {
        home: initHome,
        profile: initProfile,
        rewards: initRewards,
        dashboard: initDashboard,
        login: initLogin,
        register: initRegister,
        browse: initBrowse,
        post: initPost,
        paths: initPaths,
        submissions: initSubmissions,
        messages: initMessages,
        about: ()=>{}
    };
    if (pageInitializers[page]) {
        pageInitializers[page]();
    }
});
