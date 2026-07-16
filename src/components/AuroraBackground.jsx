import './AuroraBackground.css';

/**
 * Ambient animated background — softly drifting cobalt/coral/teal light,
 * a faint precision grid, and a subtle grain. Pure CSS, GPU-friendly.
 */
export default function AuroraBackground() {
  return (
    <div className="aurora" aria-hidden="true">
      <span className="aurora-blob b1" />
      <span className="aurora-blob b2" />
      <span className="aurora-blob b3" />
      <div className="aurora-grid" />
      <div className="aurora-veil" />
    </div>
  );
}
