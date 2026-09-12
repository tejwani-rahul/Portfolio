import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';

// Scalability threshold: If project count exceeds ~10–12 items,
// consider capping the inline grid and providing a paginated or external archive.
const INITIAL_PROJECT_COUNT = 4;

export default function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleButtonRef = useRef(null);
  const firstRevealedRef = useRef(null);
  const collapseTimeoutRef = useRef(null);

  const totalProjects = projectsData.length;
  const initialProjects = projectsData.slice(0, INITIAL_PROJECT_COUNT);
  const extraProjects = projectsData.slice(INITIAL_PROJECT_COUNT);

  const checkReducedMotion = () => {
    return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  const handleToggle = () => {
    if (!isExpanded) {
      if (collapseTimeoutRef.current) clearTimeout(collapseTimeoutRef.current);

      setIsExpanded(true);
      setIsMounted(true);

      if (checkReducedMotion()) {
        setIsVisible(true);
        setTimeout(() => {
          firstRevealedRef.current?.focus();
        }, 50);
      } else {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
        });

        // Smoothly move focus to first revealed card for keyboard/screen-reader users
        setTimeout(() => {
          firstRevealedRef.current?.focus();
        }, 100);
      }
    } else {
      setIsExpanded(false);

      if (checkReducedMotion()) {
        setIsVisible(false);
        setIsMounted(false);
        toggleButtonRef.current?.focus();
      } else {
        setIsVisible(false);
        // Wait for exit transition (350ms) before unmounting so hidden cards aren't tabbable
        collapseTimeoutRef.current = setTimeout(() => {
          setIsMounted(false);
          toggleButtonRef.current?.focus();
        }, 350);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (collapseTimeoutRef.current) clearTimeout(collapseTimeoutRef.current);
    };
  }, []);

  return (
    <section id="projects" className="relative py-24 md:py-32 border-t border-border-primary/40 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 text-left">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="section-line"></div>
              <span className="text-text-ghost font-medium tracking-[0.2em] uppercase text-[10px]">Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-text-primary leading-none uppercase">
              FEATURED PROJECTS
            </h2>
          </div>
          <p className="max-w-xs text-sm text-text-dim leading-relaxed font-light">
            Interactive representations of systems built for desktop frameworks, Web services, and ML deployment.
          </p>
        </div>

        {/* Project Cards Bento Grid */}
        <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Initial 4 projects always rendered statically */}
          {initialProjects.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}

          {/* Remaining projects revealed in-place with staggered animation */}
          {isMounted && extraProjects.map((project, idx) => {
            const isFirstRevealed = idx === 0;
            const delay = checkReducedMotion() ? 0 : idx * 60;

            return (
              <div
                key={project.id}
                ref={isFirstRevealed ? firstRevealedRef : null}
                tabIndex={isFirstRevealed ? -1 : undefined}
                className={`project-card-animated ${
                  isVisible ? 'project-card-visible' : 'project-card-hidden'
                } outline-none focus-visible:ring-1 focus-visible:ring-text-primary rounded-2xl`}
                style={{
                  transitionDelay: `${delay}ms`
                }}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>

        {/* Expand / Collapse In-Place Toggle Button */}
        {totalProjects > INITIAL_PROJECT_COUNT && (
          <div className="flex justify-center mt-16">
            <button 
              ref={toggleButtonRef}
              type="button"
              onClick={handleToggle}
              aria-expanded={isExpanded}
              aria-controls="projects-grid"
              className="px-8 py-3.5 bg-transparent text-text-secondary border border-border-secondary font-medium rounded-lg hover:bg-text-primary hover:text-bg-pure hover:border-text-primary transition-all duration-300 flex items-center gap-2 group text-sm tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-text-primary cursor-pointer"
            >
              <span>
                {isExpanded ? 'Show Fewer Projects' : `View All Projects (${totalProjects})`}
              </span>
              {isExpanded ? (
                <ChevronUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
