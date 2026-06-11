import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Home, User, FolderOpen, Mail } from 'lucide-react';

export default function Navbar({ currentPath }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Sync scroll behavior (shrinking header)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrollspy observer for active section links
  useEffect(() => {
    if (currentPath !== '#/') return;

    const sections = ['home', 'about', 'projects', 'contact'];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [currentPath]);

  // Close mobile menu on scroll or click outside
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleScrollClose = () => {
      setIsMobileMenuOpen(false);
    };

    const handleOutsideClick = (e) => {
      const header = document.querySelector('header');
      if (header && !header.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScrollClose);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('scroll', handleScrollClose);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  const handleNavLinkClick = (e, id) => {
    if (currentPath !== '#/') {
      window.location.hash = '#/';
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const isArchivePage = currentPath === '#/archive';

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 px-4 md:px-8 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-5'}`}>
      <div className={`max-w-5xl mx-auto px-6 py-2.5 rounded-full glass-panel flex items-center justify-between transition-all duration-500 ${
        isScrolled 
          ? 'shadow-lg shadow-black/20 dark:shadow-black/55 bg-bg-card/45 dark:bg-bg-card/25 border-text-primary/10' 
          : 'shadow-sm bg-bg-card/15 dark:bg-bg-card/5'
      }`}>
        {/* Brand Mark */}
        <a 
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '#/';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-heading text-sm font-bold tracking-[0.2em] text-text-primary uppercase flex items-center gap-3 group"
        >
          <span className="w-8 h-8 rounded-lg border border-text-ghost/30 flex items-center justify-center text-text-primary font-extrabold text-xs group-hover:border-text-primary/60 group-hover:bg-text-primary/5 transition-all duration-300">R</span>
          <span className="hidden sm:inline tracking-[0.15em] font-medium text-text-secondary text-xs">RAHUL</span>
        </a>
        
        {/* Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#home" 
            onClick={(e) => handleNavLinkClick(e, 'home')}
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavLinkClick(e, 'about')}
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleNavLinkClick(e, 'projects')}
            className={`nav-link ${activeSection === 'projects' || isArchivePage ? 'active' : ''}`}
          >
            Work
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavLinkClick(e, 'contact')}
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher */}
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center text-text-ghost hover:text-text-primary hover:bg-text-primary/5 transition-all border border-border-primary" 
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
          </button>

          {/* Mobile Navigation Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-text-ghost hover:text-text-primary hover:bg-text-primary/5 transition-all border border-border-primary" 
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="max-w-5xl mx-auto mt-3 px-6 py-4 rounded-2xl glass-panel shadow-xl flex flex-col gap-1 md:hidden transition-all duration-300">
          <a 
            href="#home" 
            onClick={(e) => handleNavLinkClick(e, 'home')}
            className="px-4 py-3 rounded-xl hover:bg-text-primary/5 text-text-ghost hover:text-text-primary font-medium transition-all duration-200 flex items-center gap-3 text-xs uppercase tracking-widest"
          >
            <Home size={12} className="opacity-40" /> Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavLinkClick(e, 'about')}
            className="px-4 py-3 rounded-xl hover:bg-text-primary/5 text-text-ghost hover:text-text-primary font-medium transition-all duration-200 flex items-center gap-3 text-xs uppercase tracking-widest"
          >
            <User size={12} className="opacity-40" /> About
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleNavLinkClick(e, 'projects')}
            className="px-4 py-3 rounded-xl hover:bg-text-primary/5 text-text-ghost hover:text-text-primary font-medium transition-all duration-200 flex items-center gap-3 text-xs uppercase tracking-widest"
          >
            <FolderOpen size={12} className="opacity-40" /> Work
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavLinkClick(e, 'contact')}
            className="px-4 py-3 rounded-xl hover:bg-text-primary/5 text-text-ghost hover:text-text-primary font-medium transition-all duration-200 flex items-center gap-3 text-xs uppercase tracking-widest"
          >
            <Mail size={12} className="opacity-40" /> Contact
          </a>
        </div>
      )}
    </header>
  );
}
