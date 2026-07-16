import { useEffect, useMemo, useRef, useState } from 'react';
import { CATEGORIES, STUDIO_PROMPTS, SEED_FEEDBACK, BRAND } from '../data/content.js';
import Icon from './ui/Icon.jsx';
import './Studio.css';

const MSG_KEY = 'novagent_studio_msgs';
const FB_KEY = 'novagent_feedback';
const NAME_KEY = 'novagent_name';

const load = (k, fallback) => {
  try { const v = JSON.parse(localStorage.getItem(k)); return v ?? fallback; } catch { return fallback; }
};

/* Route a message to the most relevant service category by keyword overlap. */
function routeReply(text, name) {
  const t = text.toLowerCase();
  let best = null, score = 0;
  for (const c of CATEGORIES) {
    let s = 0;
    if (t.includes(c.name.toLowerCase().split(' ')[0])) s += 2;
    for (const sv of c.services) {
      const w = sv.toLowerCase();
      if (t.includes(w)) s += 3;
      else for (const tok of w.split(/[^a-z]+/)) if (tok.length > 3 && t.includes(tok)) s += 1;
    }
    if (s > score) { score = s; best = c; }
  }
  const hi = name ? `${name}, ` : '';
  if (best && score > 0) {
    return `${hi}that's a **${best.name}** job — typical range **${best.range}**.\n\nHere's how I'll run it:\n1. Scope the work and send you a proposal\n2. Show a preview before any paid generation\n3. Start production once you approve & pay via Stripe\n4. Deliver the files + proposal, invoice, receipt, report and manual\n\nWant me to draft the proposal now? I've logged this and an operator will also follow up on Telegram (${BRAND.bot}).`;
  }
  return `${hi}I can help with that. I run **116 services across 12 categories** — video, design, 3D, audio, software, research, data, content, business ops, translation, education and tech support.\n\nTell me a bit more about the goal and budget, and I'll scope it, price it, and show you a preview before anything is charged. You can also reach an operator on Telegram (${BRAND.bot}).`;
}

function Stars({ value, onChange, size = 18 }) {
  return (
    <span className="stars" role={onChange ? 'radiogroup' : undefined}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          className={`star ${n <= value ? 'on' : ''}`}
          style={{ fontSize: size }}
          onClick={onChange ? () => onChange(n) : undefined}
          aria-label={`${n} star${n > 1 ? 's' : ''}`}
          disabled={!onChange}
        >★</button>
      ))}
    </span>
  );
}

export default function Studio() {
  const [name, setName] = useState(() => load(NAME_KEY, ''));
  const [messages, setMessages] = useState(() => load(MSG_KEY, []));
  const [input, setInput] = useState('');
  const [model, setModel] = useState('Nemotron 3 Ultra');
  const [typing, setTyping] = useState(false);
  const [feedback, setFeedback] = useState(() => load(FB_KEY, []));
  const [fbName, setFbName] = useState('');
  const [fbRating, setFbRating] = useState(5);
  const [fbText, setFbText] = useState('');
  const [sidebar, setSidebar] = useState(false);
  const threadRef = useRef(null);

  // prefill from ?intent=
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('intent');
    if (p) setInput(`I'd like: ${p}`);
  }, []);

  useEffect(() => { localStorage.setItem(MSG_KEY, JSON.stringify(messages.slice(-60))); }, [messages]);
  useEffect(() => { localStorage.setItem(FB_KEY, JSON.stringify(feedback.slice(0, 40))); }, [feedback]);
  useEffect(() => { localStorage.setItem(NAME_KEY, name); }, [name]);
  useEffect(() => {
    if (threadRef.current) threadRef.current.scrollTop = threadRef.current.scrollHeight;
  }, [messages, typing]);

  const allFeedback = useMemo(() => [...feedback, ...SEED_FEEDBACK], [feedback]);
  const avg = useMemo(() => {
    const r = allFeedback.map((f) => f.rating);
    return r.length ? (r.reduce((a, b) => a + b, 0) / r.length).toFixed(1) : '5.0';
  }, [allFeedback]);

  const send = async (preset) => {
    const text = (preset ?? input).trim();
    if (!text || typing) return;
    setMessages((m) => [...m, { role: 'user', text }]);
    setInput('');
    setTyping(true);

    // fire-and-forget to the backend (forwards to Telegram operator)
    fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name || 'Studio guest', message: text, source: 'studio' }),
    }).catch(() => {});

    const reply = routeReply(text, name);
    await new Promise((r) => setTimeout(r, 850));
    setMessages((m) => [...m, { role: 'assistant', text: reply }]);
    setTyping(false);
  };

  const onKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  };

  const newChat = () => { setMessages([]); setInput(''); };

  const submitFeedback = (e) => {
    e.preventDefault();
    if (!fbText.trim()) return;
    setFeedback((f) => [{ name: fbName.trim() || 'Anonymous', role: 'Studio user', rating: fbRating, text: fbText.trim(), you: true }, ...f]);
    setFbName(''); setFbText(''); setFbRating(5);
  };

  return (
    <div className="studio">
      {/* top bar */}
      <header className="st-top">
        <div className="st-top-l">
          <button className="st-hamburger" aria-label="Menu" onClick={() => setSidebar((s) => !s)}>☰</button>
          <a href="/" className="st-logo"><span className="st-logo-mark">◆</span> Novagent <span className="st-logo-sub">Studio</span></a>
        </div>
        <div className="st-top-r">
          <span className="st-badge"><span className="st-dot" /> Live</span>
          <a href="/dashboard.html" className="st-toplink">Dashboard</a>
          <a href="/" className="st-toplink">← Back to site</a>
        </div>
      </header>

      <div className="st-body">
        {/* left rail */}
        <aside className={`st-rail ${sidebar ? 'open' : ''}`}>
          <button className="st-new" onClick={newChat}>＋ New chat</button>

          <div className="st-rail-group">
            <div className="st-rail-title">Your name</div>
            <input className="st-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Alex" maxLength={40} />
          </div>

          <div className="st-rail-group">
            <div className="st-rail-title">Capabilities</div>
            <div className="st-caps">
              {CATEGORIES.map((c) => (
                <button key={c.name} className="st-cap" onClick={() => send(`I need help with ${c.name.toLowerCase()}`)}>
                  <Icon name={c.icon} size={15} /> {c.name}
                </button>
              ))}
            </div>
          </div>

          <div className="st-rail-foot">
            <div className="st-rail-title">Model</div>
            <select className="st-model" value={model} onChange={(e) => setModel(e.target.value)}>
              <option>Nemotron 3 Ultra</option>
              <option>Nemotron · Fast</option>
              <option>Hermes Agent Core</option>
            </select>
          </div>
        </aside>

        {/* chat */}
        <main className="st-chat">
          <div className="st-thread" ref={threadRef}>
            {messages.length === 0 ? (
              <div className="st-empty">
                <div className="st-empty-mark">◆</div>
                <h2>What can Novagent build for you?</h2>
                <p>Describe a task in plain language. I'll scope it, price it, and show a preview before anything is charged.</p>
                <div className="st-prompts">
                  {STUDIO_PROMPTS.map((p) => (
                    <button key={p} className="st-prompt" onClick={() => send(p)}>{p}</button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="st-msgs">
                {messages.map((m, i) => (
                  <div className={`st-msg ${m.role}`} key={i}>
                    <div className="st-avatar">{m.role === 'assistant' ? '◆' : (name ? name[0].toUpperCase() : 'U')}</div>
                    <div className="st-bubble">
                      {m.text.split('\n').map((line, j) => (
                        <p key={j} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
                      ))}
                    </div>
                  </div>
                ))}
                {typing && (
                  <div className="st-msg assistant">
                    <div className="st-avatar">◆</div>
                    <div className="st-bubble"><span className="st-typing"><i /><i /><i /></span></div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="st-composer">
            <div className="st-composer-box">
              <textarea
                className="st-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                placeholder="Message Novagent…  (Enter to send, Shift+Enter for newline)"
                rows={1}
              />
              <button className="st-send" onClick={() => send()} disabled={!input.trim() || typing} aria-label="Send">↑</button>
            </div>
            <div className="st-composer-meta">
              <span>{model}</span>
              <span>Preview-before-pay · every job audited</span>
            </div>
          </div>
        </main>

        {/* right rail — feedback wall */}
        <aside className="st-feed">
          <div className="st-feed-head">
            <h3>Community feedback</h3>
            <div className="st-rating"><Stars value={Math.round(avg)} /> <strong>{avg}</strong> <span>· {allFeedback.length}</span></div>
          </div>

          <form className="st-fb-form" onSubmit={submitFeedback}>
            <div className="st-fb-row">
              <input className="st-fb-name" value={fbName} onChange={(e) => setFbName(e.target.value)} placeholder="Your name" maxLength={40} />
              <Stars value={fbRating} onChange={setFbRating} size={20} />
            </div>
            <textarea className="st-fb-text" value={fbText} onChange={(e) => setFbText(e.target.value)} placeholder="Share your experience…" maxLength={240} rows={2} />
            <button className="st-fb-submit" type="submit">Post feedback</button>
          </form>

          <div className="st-fb-list">
            {allFeedback.map((f, i) => (
              <div className={`st-fb-card ${f.you ? 'you' : ''}`} key={i}>
                <div className="st-fb-top">
                  <span className="st-fb-avatar">{f.name[0]?.toUpperCase()}</span>
                  <div>
                    <div className="st-fb-name-row">{f.name} {f.you && <span className="st-you">You</span>}</div>
                    <div className="st-fb-role">{f.role}</div>
                  </div>
                  <Stars value={f.rating} size={13} />
                </div>
                <p className="st-fb-body">{f.text}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
