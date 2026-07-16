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
            <div className="socials">
              <a aria-label="TikTok" title="TikTok" href="https://www.tiktok.com/@novagent_ai" target="_blank" rel="noopener noreferrer">
                <TikTokIcon />
              </a>
              <a aria-label="WhatsApp" title="WhatsApp" href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
                <WhatsApp />
              </a>
              <a aria-label="Telegram" title="Telegram" href="https://t.me/novagent_bot" target="_blank" rel="noopener noreferrer">
                <Telegram />
              </a>
              <a aria-label="Facebook" title="Facebook" href="https://www.facebook.com/novagent.ai" target="_blank" rel="noopener noreferrer">
                <Facebook />
              </a>
              <a aria-label="Instagram" title="Instagram" href="https://www.instagram.com/novagent.ai" target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>© {new Date().getFullYear()} Novagent · Intelligence That Delivers</span>
          <span>Built on Hermes Agent · Secured by NemoClaw</span>
        </div>
      </div>
    </footer>
  );
}

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.28 8.28 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-.8-.3z"/></svg>
  );
}
function WhatsApp(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.223-.675.095l-1.063 1.063c-.413.413-.623.984-.537 1.537.085.553.49.966.997 1.217.368.182.751.248 1.122.19 1.013-.167 1.936-.676 2.373-1.495.325-.618.413-1.34.232-2.002-.2-.726-.678-1.324-1.137-1.77zm-6.637 1.439c.352-.176.33-.524.152-.83-.175-.308-.673-.49-1.294-.49-2.26 0-5.144 2.387-5.144 5.347 0 .744.178 1.465.504 2.107.256.507.607.978 1.03 1.393.358.35.78.628 1.248.822.488.205 1.06.303 1.627.283 1.082-.06 2.063-.524 2.796-1.295.668-.703 1.12-1.644 1.218-2.66.096-.906-.08-1.74-.487-2.508-.195-.361-.562-.611-.988-.692zm1.135-7.976c.67 1.295 2.214 1.295 2.214 1.295 0 0-3.062 2.26-3.062 2.26s-2.917-1.14-3.062-2.26c0 0 1.54-.056 2.214-1.295.515-.995.99-1.995 1.696-1.995.69 0 1.183 1 1.696 1.995z"/></svg>
  );
}
function Telegram(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
  );
}
function Facebook(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
  );
}
function Instagram(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
  );
}
