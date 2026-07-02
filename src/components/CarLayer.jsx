import { useEffect, useRef } from 'react';
import './CarLayer.css';

// Scroll "beats" — the real car image is swept along a path and tilted in 3D
// (CSS perspective) so it reads as moving through the page from shifting angles.
// tx/ty in vw/vh, rotations in deg, s = scale.
const BEATS = [
  { tx: 27, ty: -2, rz: 10, rx: 14, ry: -18, s: 0.92 }, // hero — right, front-ish
  { tx: 31, ty: 1, rz: 26, rx: 22, ry: -26, s: 0.82 },  // services — side sweep
  { tx: 9, ty: 4, rz: 2, rx: 30, ry: -2, s: 0.9 },      // features — overhead
  { tx: -7, ty: -2, rz: -14, rx: 18, ry: 22, s: 0.98 }, // security — turned, other side
  { tx: 19, ty: 3, rz: 22, rx: 26, ry: -18, s: 0.86 },  // process — sweeping
  { tx: -22, ty: 0, rz: -26, rx: 16, ry: 26, s: 0.92 }, // pricing — crossing left
  { tx: 3, ty: 6, rz: 8, rx: 30, ry: -8, s: 1.06 },     // cta — close, centred-ish
];

const lerp = (a, b, t) => a + (b - a) * t;

export default function CarLayer() {
  const stageRef = useRef(null);
  const p = useRef(0);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      const b = BEATS[0];
      el.style.transform =
        `translate(-50%,-50%) translate(${b.tx}vw, ${b.ty}vh) rotateX(${b.rx}deg) rotateY(${b.ry}deg) rotateZ(${b.rz}deg) scale(${b.s})`;
      return;
    }

    let raf;
    const tick = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const target = max > 0 ? window.scrollY / max : 0;
      p.current += (target - p.current) * 0.07;
      const prog = p.current;

      const segs = BEATS.length - 1;
      const f = Math.max(0, Math.min(0.9999, prog)) * segs;
      const i = Math.floor(f);
      const raw = f - i;
      const t = raw * raw * (3 - 2 * raw); // smoothstep
      const a = BEATS[i];
      const b = BEATS[i + 1];

      const tx = lerp(a.tx, b.tx, t);
      const ty = lerp(a.ty, b.ty, t);
      const rz = lerp(a.rz, b.rz, t);
      const rx = lerp(a.rx, b.rx, t);
      const ry = lerp(a.ry, b.ry, t);
      const s = lerp(a.s, b.s, t);

      el.style.transform =
        `translate(-50%,-50%) translate(${tx}vw, ${ty}vh) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${s})`;

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="car-layer" aria-hidden="true">
      <div className="car-stage" ref={stageRef}>
        <img className="car-img" src="/f1-car.png" alt="" draggable="false" />
      </div>
    </div>
  );
}
