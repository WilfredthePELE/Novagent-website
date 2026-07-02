import { NAV_LINKS, BRAND } from '../data/content.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#top" className="logo">
            <span className="logo-mark">◆</span>
            <span className="logo-text">Novagent</span>
          </a>
          <p>{BRAND.tagline}. A fully autonomous AI agency — built on Hermes Agent, secured by NemoClaw.</p>
          <div className="footer-badges">
            <span className="fb-dot" /> All systems operational
          </div>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <h4>Explore</h4>
            {NAV_LINKS.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href={BRAND.telegram} target="_blank" rel="noopener">Telegram Bot</a>
            <a href="/login.html">Operator Login</a>
            <a href="/NOVAGENT-DOCUMENTATION.md">Documentation</a>
            <a href="https://github.com/WilfredthePELE/Novagent" target="_blank" rel="noopener">GitHub</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Novagent · Intelligence That Delivers</span>
        <span>Built on Hermes Agent · Secured by NemoClaw</span>
      </div>
    </footer>
  );
}
