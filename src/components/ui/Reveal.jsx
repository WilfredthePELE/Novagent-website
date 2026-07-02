import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] },
  }),
};

/** Fade + rise on scroll into view. `i` staggers grouped children. */
export default function Reveal({ children, i = 0, as = 'div', className, style, ...rest }) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      className={className}
      style={style}
      custom={i}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
