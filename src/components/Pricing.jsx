import { PRICING } from '../data/content.js';
import Reveal from './ui/Reveal.jsx';
import './Pricing.css';

export default function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Transparent Pricing</span>
          <h2>Priced by complexity, <span className="accent-word">never by the hour</span></h2>
          <p>Price = (estimated cost × 3.5) + complexity premium. No spend happens without confirmed revenue. Daily cap of $200 enforced.</p>
        </div>

        <div className="pricing-grid">
          {PRICING.map((p, i) => (
            <Reveal i={i} className={`price-card ${p.highlight ? 'price-card--featured' : ''}`} key={p.tier}>
              {p.highlight && <span className="price-badge">Most Popular</span>}
              <h3>{p.tier}</h3>
              <div className="price-amount">{p.price}</div>
              <p className="price-desc">{p.desc}</p>
              <ul>
                {p.points.map((pt) => (
                  <li key={pt}><span className="price-check">✓</span>{pt}</li>
                ))}
              </ul>
              <a
                className={`btn ${p.highlight ? 'btn-primary' : 'btn-outline'} price-cta`}
                href={`/studio?intent=${encodeURIComponent(p.tier + ' plan')}`}
              >
                Get Started
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
