import { useState, useEffect } from 'react';
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
import AuroraBackground from './components/AuroraBackground.jsx';
import Studio from './components/Studio.jsx';

const isStudioRoute = () =>
  typeof window !== 'undefined' && window.location.pathname.replace(/\/+$/, '') === '/studio';

export default function App() {
  const [ready, setReady] = useState(false);
  const [studio] = useState(isStudioRoute);

  useEffect(() => {
    if (studio) return;
    const onScroll = () => {
      const y = window.scrollY;
      document.documentElement.style.setProperty('--scroll-y', `${y}`);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [studio]);

  if (studio) return <Studio />;

  return (
    <>
      <Preloader onDone={() => setReady(true)} />
      <AuroraBackground />
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
