import React from 'react';
import { ArrowRight, FileDown } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left: Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium bg-text-primary/[0.03] text-text-dim border border-border-primary mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 dark:bg-emerald-400"></span>
            </span>
            Available for Work
          </div>

          {/* Huge Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 leading-[0.95] text-text-primary uppercase font-heading">
            RAHUL RAJA
          </h1>

          {/* Role line with accent */}
          <div className="flex items-center gap-4 mb-8">
            <div className="section-line"></div>
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-medium text-text-ghost">
              Full Stack Developer & AI/ML Engineer
            </span>
          </div>

          {/* Short Description */}
          <p className="max-w-lg text-sm sm:text-base text-text-dim mb-10 leading-relaxed font-light">
            I bridge the gap between enterprise-grade Full-Stack architectures and advanced Deep Learning pipelines, transforming complex mathematical models into production-ready software solutions.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="px-8 py-3.5 bg-text-primary text-bg-pure font-semibold rounded-lg hover:bg-text-secondary hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5 text-sm tracking-wide"
            >
              View Work <ArrowRight size={14} className="ml-1" />
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1HSw-zrNUblHInZHOwKa2Au6XCxvcq69J"
              download="Rahul_Raja_Resume.pdf"
              className="px-8 py-3.5 bg-transparent text-text-secondary border border-border-secondary font-medium rounded-lg hover:border-text-ghost/50 hover:bg-text-primary/[0.03] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5 text-sm tracking-wide"
            >
              <FileDown size={14} className="text-text-ghost mr-1" /> Resume
            </a>
          </div>
        </div>

        {/* Right: Profile Image Frame */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[340px] aspect-square lg:aspect-[4/5] rounded-[2rem] border border-border-primary/80 overflow-hidden bg-bg-pure group shadow-[0_0_50px_rgba(255,255,255,0.01)] hover:border-text-ghost/30 hover:shadow-[0_0_50px_rgba(255,255,255,0.03)] transition-all duration-700">
            {/* Portrait Image */}
            <img
              src="assets/images/profile.jpg"
              alt="Rahul Raja"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 select-none"
            />
            {/* Dark Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Floating Rotating Emblem */}
            <div className="absolute top-6 right-6 z-10 w-20 h-20 pointer-events-none select-none">
              <svg className="rotating-badge w-full h-full text-white/40" viewBox="0 0 100 100">
                <defs>
                  <path id="text-path" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                </defs>
                <text className="text-[9px] fill-current font-bold uppercase tracking-widest">
                  <textPath href="#text-path" startOffset="0%">
                    • ENGINEER • DEVELOPER • CREATOR
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Floating Info Overlay */}
            <div className="absolute bottom-8 left-8 z-10 text-left">
              <p className="text-[10px] font-mono text-white/50 uppercase tracking-[0.2em]">Profile</p>
              <h4 className="text-xl font-bold text-white mt-1 uppercase tracking-wide">Rahul Raja</h4>
              <p className="text-xs text-white/80 font-light mt-1">CS Graduate</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
