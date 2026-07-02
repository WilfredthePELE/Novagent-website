import { PROCESS } from '../data/content.js';
import Reveal from './ui/Reveal.jsx';
import Icon from './ui/Icon.jsx';
import './Process.css';

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How It Works</span>
          <h2>From message to delivery in <span className="accent-word">four steps</span></h2>
          <p>Behind the scenes it's a 17-step lifecycle. For you, it's four — and you approve every stage before anything expensive happens.</p>
        </div>

        <div className="process-grid">
          {PROCESS.map((p, i) => (
            <Reveal i={i} className="process-step" key={p.step}>
              <div className="process-connector" aria-hidden />
              <div className="process-num">{p.step}</div>
              <div className="process-icon"><Icon name={p.icon} size={22} /></div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
