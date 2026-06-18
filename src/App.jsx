import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectArchive from './pages/ProjectArchive';
import Footer from './components/Footer';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      // Scroll to top of window smoothly on navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      {/* Subtle Film Grain Texture Overlay */}
      <svg className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.018]" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* Vignette Edge Effect */}
      <div className="fixed inset-0 z-[1] vignette"></div>

      {/* Soft Atmospheric Light Orbs — Colored & Subtle */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Top Right: Indigo glow */}
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-600/[0.025] dark:bg-indigo-600/[0.06] blur-[180px] animate-pulse-slow"></div>
        {/* Bottom Left: Cyan/Teal glow */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-cyan-500/[0.02] dark:bg-cyan-500/[0.05] blur-[180px] animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        {/* Center/Middle Right: Deep Purple glow */}
        <div className="absolute top-[35%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-purple-600/[0.015] dark:bg-purple-600/[0.04] blur-[150px] animate-pulse-slow" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Navigation Header */}
      <Navbar currentPath={currentPath} />

      {/* Router rendering */}
      <div className="relative z-10">
        {currentPath === '#/archive' ? (
          <ProjectArchive />
        ) : (
          <Home />
        )}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
