import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data/content.js';
import './Nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="logo" aria-label="Novagent home">
          <span className="logo-mark">◆</span>
          <span className="logo-text">Novagent</span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="/studio" className="btn btn-primary nav-cta-mobile" onClick={() => setOpen(false)}>
            Get Started
          </a>
        </nav>

        <div className="nav-right">
          <a href="/studio" className="btn btn-primary nav-cta">Get Started</a>
          <button
            className={`burger ${open ? 'active' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
