import React, { useState } from 'react';
import { Copy, Check, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("rahul.tejwani.456@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy email: ', err);
    });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-border-primary/40 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bento-card p-8 sm:p-16 text-center relative overflow-hidden">
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-line"></div>
            <span className="text-text-ghost font-medium tracking-[0.2em] uppercase text-[10px]">Get In Touch</span>
            <div className="section-line" style={{ transform: 'scaleX(-1)' }}></div>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-text-primary mb-6 leading-none uppercase">
            LET'S COLLABORATE
          </h2>
          <p className="max-w-lg mx-auto text-sm text-text-dim mb-10 leading-relaxed font-light">
            I am actively open to discussing software developer positions, ML projects, or systems design. Get in touch directly using the channels below.
          </p>

          {/* Copy Email Widget */}
          <div className="flex flex-col items-center gap-4 mb-10">
            <div className="inline-flex items-center gap-3 p-1.5 pl-4 bg-bg-deep border border-border-primary rounded-full max-w-full">
              <span className="text-xs font-medium text-text-dim select-all truncate font-mono">rahul.tejwani.456@gmail.com</span>
              <button 
                onClick={handleCopy}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="relative w-9 h-9 rounded-full bg-bg-card text-text-ghost hover:text-text-primary hover:bg-text-primary/10 active:scale-95 transition-all border border-border-primary flex items-center justify-center" 
                aria-label="Copy Email"
              >
                {!copied ? (
                  <Copy size={12} />
                ) : (
                  <Check size={12} className="text-text-primary" />
                )}
                
                {/* Tooltip */}
                <span className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-2.5 py-1 text-[10px] font-medium text-bg-pure bg-text-primary rounded-md shadow-md transition-all duration-200 pointer-events-none whitespace-nowrap opacity-0 scale-95 ${
                  showTooltip ? 'tooltip-visible' : ''
                }`}>
                  {copied ? 'Copied!' : 'Copy Email'}
                </span>
              </button>
            </div>
          </div>

          {/* Channels links */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            <a href="mailto:rahul.tejwani.456@gmail.com" className="px-6 py-3 bg-transparent text-text-secondary border border-border-secondary font-medium rounded-lg transition-all hover:-translate-y-0.5 hover:border-[#ea4335] hover:bg-[#ea4335]/5 flex items-center gap-2 text-xs tracking-wide group">
              <Mail size={12} className="text-[#ea4335] group-hover:text-text-primary transition-colors" /> Send Mail
            </a>
            <a href="https://www.linkedin.com/in/rahultejwani" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent text-text-secondary border border-border-secondary font-medium rounded-lg transition-all hover:-translate-y-0.5 hover:border-[#0a66c2] hover:bg-[#0a66c2]/5 flex items-center gap-2 text-xs tracking-wide group">
              <LinkedinIcon size={12} className="text-[#0a66c2] group-hover:text-text-primary transition-colors" /> LinkedIn
            </a>
            <a href="https://github.com/tejwani-rahul" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent text-text-secondary border border-border-secondary font-medium rounded-lg transition-all hover:-translate-y-0.5 hover:border-text-primary hover:bg-text-primary/5 flex items-center gap-2 text-xs tracking-wide group">
              <GithubIcon size={12} className="text-text-primary" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
