import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';

export default function ProjectsSection() {
  // Homepage only features the first 4 projects
  const featuredProjects = projectsData.slice(0, 4);

  const navigateToArchive = (e) => {
    e.preventDefault();
    window.location.hash = '#/archive';
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 border-t border-border-primary/40 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* View More Projects Link Trigger */}
        <div className="flex justify-center mt-16">
          <a 
            href="#/archive" 
            onClick={navigateToArchive}
            className="px-8 py-3.5 bg-transparent text-text-secondary border border-border-secondary font-medium rounded-lg hover:bg-text-primary hover:text-bg-pure hover:border-text-primary transition-all duration-300 flex items-center gap-2 group text-sm tracking-wide"
          >
            View All Projects <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
