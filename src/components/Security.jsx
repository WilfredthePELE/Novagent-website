import { SECURITY_LAYERS } from '../data/content.js';
import Reveal from './ui/Reveal.jsx';
import './Security.css';

export default function Security() {
  return (
    <section className="section security" id="security">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Enterprise-Grade</span>
          <h2>Three layers between the agent <span className="accent-word">and disaster</span></h2>
          <p>Kernel isolation, verified tool calls, and hard financial limits — plus an instant kill switch triggered by a single word.</p>
        </div>

        <div className="security-stack">
          {SECURITY_LAYERS.map((layer, i) => (
            <Reveal i={i} className="sec-layer" key={layer.title} style={{ '--c': layer.color }}>
              <div className="sec-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="sec-body">
                <span className="sec-tag">{layer.tag}</span>
                <h3>{layer.title}</h3>
                <ul>
                  {layer.points.map((p) => (
                    <li key={p}><span className="sec-check">✓</span>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="sec-bar" />
            </Reveal>
          ))}
        </div>

        <Reveal className="killswitch">
          <div className="kill-left">
            <span className="kill-icon">⚡</span>
            <div>
              <h4>Kill Switch</h4>
              <p>One word freezes all spending and sub-agents, saves state, and reports in 60 seconds.</p>
            </div>
          </div>
          <div className="kill-words">
            {['KILL', 'STOP', 'HALT', 'SHUTDOWN', 'FREEZE', 'ABORT'].map((w) => (
              <span className="kill-word" key={w}>{w}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
