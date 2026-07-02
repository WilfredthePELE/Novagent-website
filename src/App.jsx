import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Services from './components/Services.jsx';
import Features from './components/Features.jsx';
import Security from './components/Security.jsx';
import Process from './components/Process.jsx';
import Pricing from './components/Pricing.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import ChatWidget from './components/ChatWidget.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Preloader from './components/Preloader.jsx';
import CarLayer from './components/CarLayer.jsx';

export default function App() {
  const [ready, setReady] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // anchor links -> smooth scroll via lenis
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const el = document.querySelector(id);
        if (el) { e.preventDefault(); lenis.scrollTo(el, { offset: -80 }); }
      }
    };
    document.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', onClick);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Preloader onDone={() => setReady(true)} />
      <CarLayer />
      <ScrollProgress />
      <Nav />
      <div className="page">
        <main>
          <Hero ready={ready} />
          <Marquee />
          <Services />
          <Features />
          <Security />
          <Process />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
      <ChatWidget />
    </>
  );
}
