import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BRAND } from '../data/content.js';
import './ChatWidget.css';

const LS_KEY = 'novagent_chat_msgs';

function loadMsgs() {
  try {
    const saved = JSON.parse(localStorage.getItem(LS_KEY) || 'null');
    if (Array.isArray(saved) && saved.length) return saved;
  } catch (_) {}
  return [{ role: 'bot', text: 'Hey! How can Novagent help you today?' }];
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState('chat');
  const [msgs, setMsgs] = useState(loadMsgs);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null); // {type,text}
  const [sending, setSending] = useState(false);
  const bodyRef = useRef(null);

  // external open trigger (nav / CTAs)
  useEffect(() => {
    const openIt = () => { setOpen(true); setTab('chat'); };
    window.addEventListener('novagent:open-chat', openIt);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('novagent:open-chat', openIt);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    try { localStorage.setItem(LS_KEY, JSON.stringify(msgs.slice(-50))); } catch (_) {}
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [msgs, open, tab]);

  const push = (role, text) => setMsgs((m) => [...m, { role, text }]);

  const send = async () => {
    const n = name.trim(); const msg = message.trim();
    if (!n || !msg) {
      setStatus({ type: 'error', text: 'Please enter your name and message.' });
      setTimeout(() => setStatus(null), 3000);
      return;
    }
    setSending(true);
    push('user', msg);
    setMessage('');
    try {
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: n, email: email.trim(), message: msg, source: 'website' }),
      });
      if (!resp.ok) throw new Error('server');
      setStatus({ type: 'success', text: 'Message sent ✓' });
      push('bot', `Thanks ${n}! We'll get back to you shortly.`);
    } catch (_) {
      setStatus({ type: 'error', text: 'Service unavailable — try Telegram.' });
      push('bot', 'Chat is currently unavailable. Please reach us on Telegram: t.me/novagent_bot');
    }
    setSending(false);
    setTimeout(() => setStatus(null), 4000);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  };

  return (
    <>
      <button
        className={`nchat-bubble ${open ? 'open' : ''}`}
        aria-label="Chat with Novagent"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? (
          <span className="nchat-bubble-x">✕</span>
        ) : (
          <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" /></svg>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nchat-panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="nchat-header">
              <div className="nchat-avatar">◆</div>
              <div className="nchat-header-info">
                <div className="nchat-header-name">Novagent AI</div>
                <div className="nchat-header-status"><span className="nchat-online" /> Online · replies fast</div>
              </div>
              <button className="nchat-close" aria-label="Close chat" onClick={() => setOpen(false)}>✕</button>
            </div>

            <div className="nchat-tabs">
              <button className={`nchat-tab ${tab === 'chat' ? 'active' : ''}`} onClick={() => setTab('chat')}>💬 Chat</button>
              <button className={`nchat-tab ${tab === 'telegram' ? 'active' : ''}`} onClick={() => setTab('telegram')}>✈️ Telegram</button>
            </div>

            <div className="nchat-body" ref={bodyRef}>
              {tab === 'chat' ? (
                <>
                  <div className="nchat-messages">
                    {msgs.map((m, i) => (
                      <div className={`nchat-msg ${m.role}`} key={i}>
                        <div className="nchat-msg-bubble">{m.text}</div>
                      </div>
                    ))}
                  </div>
                  <div className="nchat-contact">
                    <div className="nchat-row">
                      <div className="nchat-input-group">
                        <label>Your Name</label>
                        <input className="nchat-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. John" maxLength={50} />
                      </div>
                      <div className="nchat-input-group">
                        <label>Email <span>(optional)</span></label>
                        <input className="nchat-input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="for follow-up" maxLength={100} type="email" />
                      </div>
                    </div>
                    <div className="nchat-input-group">
                      <label>Message</label>
                      <textarea className="nchat-input" value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={onKeyDown} placeholder="Tell us what you need..." maxLength={1000} rows={2} />
                    </div>
                    {status && <div className={`nchat-${status.type}`}>{status.text}</div>}
                    <button className="nchat-send" onClick={send} disabled={sending}>
                      {sending ? 'Sending…' : 'Send Message →'}
                    </button>
                  </div>
                </>
              ) : (
                <div className="nchat-telegram">
                  <div className="nchat-telegram-icon">
                    <svg viewBox="0 0 24 24"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 11.9c-.66-.21-.67-.66-.14-.99l18.26-7.04c.56-.24.99.13.82.91l-3.11 14.63c-.13.6-.48.74-1.02.54l-5.31-3.52-2.06 1.99c-.23.22-.42.42-.83.23z" /></svg>
                  </div>
                  <h4>Chat on Telegram</h4>
                  <p>Get instant responses from our AI agent directly on Telegram, 24/7.</p>
                  <a className="nchat-telegram-btn" href={BRAND.telegram} target="_blank" rel="noopener">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 11.9c-.66-.21-.67-.66-.14-.99l18.26-7.04c.56-.24.99.13.82.91l-3.11 14.63c-.13.6-.48.74-1.02.54l-5.31-3.52-2.06 1.99c-.23.22-.42.42-.83.23z" /></svg>
                    Open Telegram
                  </a>
                  <p className="nchat-bot-line">Bot: <strong>{BRAND.bot}</strong> · 24/7</p>
                </div>
              )}
            </div>

            <div className="nchat-footer">Novagent · Intelligence That Delivers</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
