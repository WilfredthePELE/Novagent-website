import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './ui/Icon.jsx';
import './ServiceModal.css';

export default function ServiceModal({ category, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const startService = (service) => {
    const q = encodeURIComponent(`${category.name} — ${service}`);
    window.location.href = `/studio?intent=${q}`;
  };

  return (
    <AnimatePresence>
      {category && (
        <motion.div
          className="svc-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="svc-modal"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="svc-close" aria-label="Close" onClick={onClose}>✕</button>

            <div className="svc-head">
              <span className="svc-icon"><Icon name={category.icon} size={24} /></span>
              <div>
                <h3>{category.name}</h3>
                <p><strong>{category.count} services</strong> · {category.range}</p>
              </div>
            </div>

            <p className="svc-blurb">{category.blurb}</p>

            <div className="svc-list">
              {category.services.map((s) => (
                <button className="svc-item" key={s} onClick={() => startService(s)}>
                  <span className="svc-check">✓</span>
                  <span className="svc-name">{s}</span>
                  <span className="svc-go">Start →</span>
                </button>
              ))}
            </div>

            <div className="svc-foot">
              <span className="svc-note">Every service includes preview-before-pay and a full paper trail.</span>
              <a className="btn btn-primary" href={`/studio?intent=${encodeURIComponent(category.name)}`}>
                Start a {category.name.toLowerCase()} job →
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
