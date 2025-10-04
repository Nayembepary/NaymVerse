let isChatOpen = false;
let freeMessageLimit = 3; // Free user limit
let usedMessages = 0;

function toggleChat(){
  const chat = document.getElementById('chatBox');
  isChatOpen = !isChatOpen;
  chat.style.display = isChatOpen ? 'flex' : 'none';
}

async function sendMessage(){
  const input = document.getElementById('chatInput');
  const messagesDiv = document.getElementById('chatMessages');
  const msg = input.value.trim();
  if(!msg) return;

  if(usedMessages >= freeMessageLimit){
    messagesDiv.innerHTML += `<div style="color:red;">⚠️ Free message limit reached. Please pay to continue.</div>`;
    input.value = '';
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    return;
  }

  messagesDiv.innerHTML += `<div style="text-align:right; margin-bottom:5px;"><b>You:</b> ${msg}</div>`;
  input.value = '';
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
  usedMessages++;

  // Placeholder AI response
  messagesDiv.innerHTML += `<div style="text-align:left; margin-bottom:5px;"><b>AI:</b> This is a placeholder response.</div>`;
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
