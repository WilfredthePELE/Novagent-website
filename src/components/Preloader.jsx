import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Preloader.css';

export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 18 + 6;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setTimeout(() => { setGone(true); onDone?.(); }, 450);
      }
      setProgress(Math.min(p, 100));
    }, 160);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <div className="pre-logo">
            <span className="pre-mark">◆</span>
            <span className="pre-name">Novagent</span>
          </div>
          <div className="pre-bar"><div className="pre-fill" style={{ width: `${progress}%` }} /></div>
          <div className="pre-pct">{Math.round(progress)}%</div>
          <div className="pre-tag">Intelligence That Delivers</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
