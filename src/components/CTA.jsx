import Reveal from './ui/Reveal.jsx';
import { BRAND } from '../data/content.js';
import './CTA.css';

export default function CTA() {
  const openChat = () => window.dispatchEvent(new CustomEvent('novagent:open-chat'));
  return (
    <section className="section cta-section">
      <div className="container">
        <Reveal className="cta-box">
          <div className="cta-orbit" aria-hidden>
            <span className="orbit-dot d1" /><span className="orbit-dot d2" /><span className="orbit-dot d3" />
          </div>
          <span className="cta-eyebrow">See it in action</span>
          <h2>Give it a goal.<br /><span className="cta-accent">Watch it deliver.</span></h2>
          <p>The live dashboard shows every operation, decision, and financial metric in real time. Or just start a conversation — the agent replies instantly.</p>
          <div className="cta-actions">
            <button className="btn cta-btn-light" onClick={openChat}>Start a conversation</button>
            <a href="/dashboard.html" className="btn cta-btn-outline">View live dashboard</a>
            <a href={BRAND.telegram} target="_blank" rel="noopener" className="cta-telegram">Telegram · {BRAND.bot} →</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
