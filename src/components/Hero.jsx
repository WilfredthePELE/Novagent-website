import { useRef, Suspense } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { HERO_STATS } from '../data/content.js';
import Counter from './ui/Counter.jsx';
import HeroScene from './HeroScene.jsx';
import './Hero.css';

export default function Hero({ ready }) {
  const root = useRef(null);

  useGSAP(
    () => {
      if (!ready) return;
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-title .line', { yPercent: 118, opacity: 0, duration: 0.95, stagger: 0.12 })
        .from('.hero-actions .btn', { y: 18, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.35')
        .from('.hero-stat', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.3');
    },
    { scope: root, dependencies: [ready] }
  );

  return (
    <section className="hero dark" id="top" ref={root}>
      <div aria-hidden="true" className="hero-scene-root">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>
      <div className="hero-gradient" aria-hidden="true" />
      <div className="container hero-content">
        <h1 className="hero-title">
          <span className="line-wrap"><span className="line">Intelligence</span></span>
          <span className="line-wrap"><span className="line"><span className="underline-accent">that delivers.</span></span></span>
        </h1>

        <div className="hero-actions">
          <a href="/studio" className="btn btn-primary">Get started <span aria-hidden>→</span></a>
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