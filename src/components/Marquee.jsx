import { MARQUEE } from '../data/content.js';
import './Marquee.css';

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-fade marquee-fade--l" />
      <div className="marquee-track">
        {items.map((m, i) => (
          <span className="marquee-item" key={i}>
            {m} <span className="marquee-dot">◆</span>
          </span>
        ))}
      </div>
      <div className="marquee-fade marquee-fade--r" />
    </div>
  );
}
