import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  // Legacy route redirect: smoothly forward any bookmarks or links from #/archive to #projects
  useEffect(() => {
    const handleHashCheck = () => {
      if (window.location.hash === '#/archive' || window.location.hash === '#/archive/') {
        window.location.hash = '#projects';
        setTimeout(() => {
          const projectsEl = document.getElementById('projects');
          if (projectsEl) {
            projectsEl.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      }
    };

    handleHashCheck();
    window.addEventListener('hashchange', handleHashCheck);
    return () => window.removeEventListener('hashchange', handleHashCheck);
  }, []);

  return (
    <>
      {/* Vignette Edge Effect */}
      <div className="fixed inset-0 z-[1] vignette"></div>

      {/* Soft Atmospheric Light Orbs — radial-gradient (no filter:blur, eliminates zoom rasterization cost) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-40 dark:opacity-100">
        {/* Top Right: Indigo glow */}
        <div
          className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)', willChange: 'opacity' }}
        />
        {/* Bottom Left: Cyan/Teal glow */}
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)', animationDelay: '3s', willChange: 'opacity' }}
        />
        {/* Center/Middle Right: Deep Purple glow */}
        <div
          className="absolute top-[35%] right-[-5%] w-[45vw] h-[45vw] rounded-full animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, rgba(147,51,234,0.12) 0%, transparent 70%)', animationDelay: '6s', willChange: 'opacity' }}
        />
      </div>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content — Seamless single-page narrative */}
      <main className="relative z-10">
        <Home />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
