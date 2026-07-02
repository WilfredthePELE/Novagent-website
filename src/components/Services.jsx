import { useRef } from 'react';
import { CATEGORIES } from '../data/content.js';
import Reveal from './ui/Reveal.jsx';
import Icon from './ui/Icon.jsx';
import './Services.css';

function ServiceCard({ cat, i }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5);
    const y = ((e.clientY - r.top) / r.height - 0.5);
    el.style.setProperty('--rx', `${-y * 8}deg`);
    el.style.setProperty('--ry', `${x * 8}deg`);
    el.style.setProperty('--mx', `${(x + 0.5) * 100}%`);
    el.style.setProperty('--my', `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <Reveal i={i % 4} className="service-card-wrap">
      <div className="service-card" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
        <div className="service-glow" />
        <div className="service-top">
          <span className="service-icon"><Icon name={cat.icon} size={22} /></span>
          <span className="service-count">{String(cat.count).padStart(2, '0')} services</span>
        </div>
        <h3>{cat.name}</h3>
        <p>{cat.blurb}</p>
        <div className="service-foot">
          <span className="service-range">{cat.range}</span>
          <span className="service-arrow">→</span>
        </div>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">12 Categories · 116 Services</span>
          <h2>Everything an agency does, <span className="accent-word">autonomously</span></h2>
          <p>From cinematic video to full-stack software, research to translation. One agent, priced transparently, delivered with a full paper trail.</p>
        </div>

        <div className="services-grid">
          {CATEGORIES.map((cat, i) => (
            <ServiceCard cat={cat} i={i} key={cat.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
