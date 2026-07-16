import Reveal from './ui/Reveal.jsx';
import { BRAND } from '../data/content.js';
import './CTA.css';

export default function CTA() {
  return (
    <section className="section cta-section">
      <div className="container">
        <Reveal className="cta-box">
          <div className="cta-orbit" aria-hidden>
            <span className="orbit-dot d1" /><span className="orbit-dot d2" /><span className="orbit-dot d3" />
          </div>
          <span className="cta-eyebrow">See it in action</span>
          <h2>Give it a goal.<br /><span className="cta-accent">Watch it deliver.</span></h2>
          <p>Start a conversation or open the Studio — the agent replies instantly and shows every operation in real time.</p>
          <div className="cta-actions">
            <a className="btn cta-btn-light" href="/studio">Open the Studio</a>
            <a href={BRAND.telegram} target="_blank" rel="noopener" className="cta-telegram">Telegram · {BRAND.bot} →</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
