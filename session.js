const params = new URLSearchParams(window.location.search);
const sessionId = params.get('session_id');
const role = params.get('role');
const statusEl = document.getElementById('status');
const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');

if (!sessionId || !role) {
    statusEl.textContent = "Error: Session ID or role is missing.";
}

const peerConnection = new RTCPeerConnection({
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
});

async function startSession() {
    try {
        statusEl.textContent = "Requesting camera and microphone access...";
        const localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;
        localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));

        peerConnection.ontrack = event => {
            remoteVideo.srcObject = event.streams[0];
        };

        if (role === 'caller') {
            statusEl.textContent = 'Creating session...';
            const offer = await peerConnection.createOffer();
            await peerConnection.setLocalDescription(offer);
            localStorage.setItem(`webrtc_offer_${sessionId}`, JSON.stringify(offer));
            statusEl.textContent = 'Session created. Waiting for other user to join...';
        }

        window.addEventListener('storage', handleSignaling);
        if (role === 'tutor' && localStorage.getItem(`webrtc_offer_${sessionId}`)) {
            handleSignaling({ key: `webrtc_offer_${sessionId}`, newValue: localStorage.getItem(`webrtc_offer_${sessionId}`) });
        }

    } catch (err) {
        statusEl.textContent = `Error: ${err.message}. Please allow camera/microphone access.`;
        console.error(err);
    }
}

async function handleSignaling(event) {
    if (event.key === `webrtc_offer_${sessionId}` && role === 'tutor') {
        statusEl.textContent = 'Offer received. Answering...';
        const offer = JSON.parse(event.newValue);
        await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);
        localStorage.setItem(`webrtc_answer_${sessionId}`, JSON.stringify(answer));
        statusEl.textContent = 'Connection established!';
    } else if (event.key === `webrtc_answer_${sessionId}` && role === 'caller') {
        const answer = JSON.parse(event.newValue);
        await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
        statusEl.textContent = 'Connection established!';
    }
}

startSession();
