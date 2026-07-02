import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { HERO_STATS } from '../data/content.js';
import Counter from './ui/Counter.jsx';
import './Hero.css';

export default function Hero({ ready }) {
  const root = useRef(null);

  useGSAP(
    () => {
      if (!ready) return;
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-badge', { y: 18, opacity: 0, duration: 0.6 })
        .from('.hero-title .line', { yPercent: 115, opacity: 0, duration: 0.9, stagger: 0.12 }, '-=0.2')
        .from('.hero-sub', { y: 22, opacity: 0, duration: 0.7 }, '-=0.45')
        .from('.hero-actions .btn', { y: 18, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.4')
        .from('.hero-stat', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.3');
    },
    { scope: root, dependencies: [ready] }
  );

  return (
    <section className="hero" id="top" ref={root}>
      <div className="container hero-content">
        <div className="hero-badge">
          <span className="pulse-dot" /> Autonomous · operating live 24/7
        </div>

        <h1 className="hero-title">
          <span className="line-wrap"><span className="line">Intelligence</span></span>
          <span className="line-wrap"><span className="line"><span className="underline-accent">that delivers.</span></span></span>
        </h1>

        <p className="hero-sub">
          Novagent is a fully autonomous AI agency — <strong>48 skills</strong>,
          <strong> 116 services</strong> across <strong>12 categories</strong>. It finds the work,
          scopes it, delivers it, and gets paid. No human in the loop.
        </p>

        <div className="hero-actions">
          <a href="/dashboard.html" className="btn btn-primary">Open live dashboard <span aria-hidden>→</span></a>
          <a href="#services" className="btn btn-outline">Browse services</a>
        </div>

        <div className="hero-stats">
          {HERO_STATS.map((s) => (
            <div className="hero-stat" key={s.label}>
              <div className="hero-stat-num"><Counter value={s.num} suffix={s.suffix} /></div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a href="#services" className="scroll-hint" aria-label="Scroll down">
        <span className="scroll-line" /> Scroll to explore
      </a>
    </section>
  );
}
