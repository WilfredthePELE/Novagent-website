(function() {
  'use strict';

  function qs(id) { return document.getElementById(id); }
  function qsa(sel) { return document.querySelectorAll(sel); }

  function init() {
    const panel = qs('nchatPanel');
    const bubble = qs('nchatBubble');
    if (!panel || !bubble) return;

    bubble.addEventListener('click', function(e) {
      e.preventDefault();
      const isOpen = panel.classList.contains('open');
      if (isOpen) { close(); } else { open(); }
    });

    const closeBtn = qs('nchatClose');
    if (closeBtn) closeBtn.addEventListener('click', close);

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') close();
    });
  }

  function open() {
    const panel = qs('nchatPanel');
    const bubble = qs('nchatBubble');
    if (!panel || !bubble) return;
    panel.classList.add('open');
    bubble.classList.add('open');
    bubble.setAttribute('aria-expanded', 'true');
    render();
  }

  function close() {
    const panel = qs('nchatPanel');
    const bubble = qs('nchatBubble');
    if (!panel || !bubble) return;
    panel.classList.remove('open');
    bubble.classList.remove('open');
    bubble.setAttribute('aria-expanded', 'false');
  }

  function switchTab(tab) {
    const isChat = tab === 'chat';
    const start = qs('nchatStartContent');
    const chat = qs('nchatChatContent');
    const tg = qs('nchatTelegramContent');

    if (start) start.style.display = isChat ? 'none' : 'block';
    if (chat) chat.style.display = isChat ? 'block' : 'none';
    if (tg) tg.style.display = isChat ? 'none' : 'block';

    qsa('.nchat-tab').forEach(function(el) {
      el.classList.toggle('active', el.getAttribute('data-tab') === tab);
    });
  }

  function startChat() {
    open();
    switchTab('chat');
    loadMessages();
  }

  function loadMessages() {
    const container = qs('nchatMessages');
    if (!container) return;
    const saved = localStorage.getItem('novagent_chat_msgs');
    if (!saved) {
      container.innerHTML = '<div class="nchat-msg bot"><div class="nchat-msg-bubble">Hey! How can Novagent help you today?</div></div>';
      return;
    }
    try {
      container.innerHTML = JSON.parse(saved).map(function(m) {
        return '<div class="nchat-msg ' + m.role + '"><div class="nchat-msg-bubble">' + m.text + '</div></div>';
      }).join('');
      scrollBottom();
    } catch(e) {
      container.innerHTML = '<div class="nchat-msg bot"><div class="nchat-msg-bubble">How can Novagent help you?</div></div>';
    }
  }

  function addMessage(role, text) {
    const container = qs('nchatMessages');
    if (!container) return;
    container.insertAdjacentHTML('beforeend', '<div class="nchat-msg ' + role + '"><div class="nchat-msg-bubble">' + text + '</div></div>');
    scrollBottom();
    const msgs = JSON.parse(localStorage.getItem('novagent_chat_msgs') || '[]');
    msgs.push({ role: role, text: text });
    if (msgs.length > 50) msgs.splice(0, msgs.length - 50);
    localStorage.setItem('novagent_chat_msgs', JSON.stringify(msgs));
  }

  function scrollBottom() {
    const body = qs('nchatBody');
    if (body) body.scrollTop = body.scrollHeight;
  }

  async function sendChatMessage() {
    const nameEl = qs('nchatName');
    const emailEl = qs('nchatEmail');
    const msgEl = qs('nchatMessage');
    const btn = qs('nchatSendBtn');
    const result = qs('nchatSendResult');

    if (!nameEl || !msgEl) return;
    const name = nameEl.value.trim();
    const email = emailEl ? emailEl.value.trim() : '';
    const msg = msgEl.value.trim();

    if (!name || !msg) {
      if (result) result.innerHTML = '<div class="nchat-error">Please enter your name and message</div>';
      setTimeout(function() { if (result) result.innerHTML = ''; }, 3000);
      return;
    }

    if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
    addMessage('user', msg);
    try {
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, email: email, message: msg, source: 'website' })
      });
      if (resp.ok) {
        if (result) result.innerHTML = '<div class="nchat-success">Message sent</div>';
        if (msgEl) msgEl.value = '';
        addMessage('bot', 'Thanks ' + name + '! We\'ll get back to you shortly.');
      } else {
        throw new Error('Server error');
      }
    } catch(e) {
      if (result) result.innerHTML = '<div class="nchat-error">Service unavailable. Try Telegram instead.</div>';
      addMessage('bot', 'Chat is currently unavailable. Please use Telegram: t.me/novagent_bot');
    }
    if (btn) { btn.disabled = false; btn.textContent = 'Send Message →'; }
    if (result) setTimeout(function() { result.innerHTML = ''; }, 4000);
  }

  document.addEventListener('click', function(e) {
    const tab = e.target.closest('.nchat-tab');
    if (!tab) return;
    const mode = tab.getAttribute('data-tab');
    if (mode) switchTab(mode);
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      const active = document.activeElement;
      if (active && active.id === 'nchatMessage') {
        e.preventDefault();
        sendChatMessage();
      }
    }
  });

  window.NovagentChat = {
    open: open,
    close: close,
    startChat: startChat,
    switchTab: switchTab,
    send: sendChatMessage
  };

  window.startChat = function() {
    startChat();
  };

  init();
})();
