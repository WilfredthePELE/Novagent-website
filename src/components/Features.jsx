import { FEATURES } from '../data/content.js';
import Reveal from './ui/Reveal.jsx';
import Icon from './ui/Icon.jsx';
import './Features.css';

export default function Features() {
  return (
    <section className="section features-section" id="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why Novagent</span>
          <h2>Built to run a business <span className="accent-word">on its own</span></h2>
          <p>Not a chatbot with a to-do list. A complete operator with security, accounting, and delivery baked in.</p>
        </div>

        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <Reveal i={i % 3} className="feature-card" key={f.title}>
              <div className="feature-icon"><Icon name={f.icon} size={22} /></div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <span className="feature-index">0{i + 1}</span>
              <div className="feature-line" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
