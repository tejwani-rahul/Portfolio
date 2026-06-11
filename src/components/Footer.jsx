import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Footer() {
  return (
    <footer className="relative z-10 py-12 border-t border-border-primary/40 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center">
        
        <p className="text-[11px] text-text-faint font-light tracking-wide">
          &copy; 2026 Rahul Raja. All rights reserved.
        </p>
        
        {/* Quick Icon Links */}
        <div className="flex items-center gap-3">
          <a 
            href="https://github.com/tejwani-rahul" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-8 h-8 rounded-full bg-bg-subtle text-text-primary hover:bg-text-primary hover:text-bg-pure transition-all duration-300 flex items-center justify-center border border-border-primary hover:border-text-primary" 
            aria-label="GitHub"
          >
            <GithubIcon size={12} />
          </a>
          <a 
            href="https://www.linkedin.com/in/rahultejwani" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-8 h-8 rounded-full bg-bg-subtle text-[#0a66c2] hover:bg-[#0a66c2] hover:text-text-primary transition-all duration-300 flex items-center justify-center border border-border-primary hover:border-[#0a66c2]" 
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={12} />
          </a>
          <a 
            href="mailto:rahul.tejwani.456@gmail.com" 
            className="w-8 h-8 rounded-full bg-bg-subtle text-[#ea4335] hover:bg-[#ea4335] hover:text-text-primary transition-all duration-300 flex items-center justify-center border border-border-primary hover:border-[#ea4335]" 
            aria-label="Email"
          >
            <Mail size={12} />
          </a>
        </div>

      </div>
    </footer>
  );
}
