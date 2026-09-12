import React from 'react';
import { ExternalLink, BarChart3 } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

const getTechTagStyle = (techName) => {
  const name = techName.toLowerCase().trim();
  
  if (name.includes('full stack') || name.includes('fullstack')) {
    return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/20';
  }
  if (name.includes('mongodb') || name.includes('mongo')) {
    return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20';
  }
  if (name.includes('llm') || name.includes('agent') || name.includes('openai')) {
    return 'bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-200 dark:border-violet-500/20';
  }
  if (name.includes('redux')) {
    return 'bg-pink-500/10 text-pink-700 dark:text-pink-400 border-pink-200 dark:border-pink-500/20';
  }
  if (name.includes('pytorch') || name.includes('yolo') || name.includes('resnet')) {
    return 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-500/20';
  }
  if (name.includes('python')) {
    return 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-500/20';
  }
  if (name.includes('react')) {
    return 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20';
  }
  if (name.includes('node') || name.includes('express')) {
    return 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-200 dark:border-green-500/20';
  }
  if (name.includes('jwt') || name.includes('security') || name.includes('auth')) {
    return 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/20';
  }
  if (name.includes('postgres') || name.includes('postgresql')) {
    return 'bg-blue-400/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-400/20';
  }
  if (name.includes('kotlin')) {
    return 'bg-indigo-400/10 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-400/20';
  }
  if (name.includes('mysql') || name.includes('sql') || name.includes('jdbc')) {
    return 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-500/20';
  }
  if (name.includes('java')) {
    return 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-200 dark:border-red-500/20';
  }
  if (name.includes('tailwind')) {
    return 'bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-200 dark:border-teal-500/20';
  }
  
  return 'bg-bg-subtle text-text-muted border-border-secondary';
};

const getProjectHoverStyle = (id) => {
  switch(id) {
    case 'nextorbit':
      return 'hover:border-blue-500/30 hover:shadow-[0_0_50px_rgba(59,130,246,0.06)]';
    case 'aerial-detection':
      return 'hover:border-rose-500/30 hover:shadow-[0_0_50px_rgba(244,63,94,0.06)]';
    case 'multimodal-commentary':
      return 'hover:border-violet-500/30 hover:shadow-[0_0_50px_rgba(139,92,246,0.06)]';
    case 'quiz-flashcards':
      return 'hover:border-amber-500/30 hover:shadow-[0_0_50px_rgba(245,158,11,0.06)]';
    case 'skin-cancer':
      return 'hover:border-emerald-500/30 hover:shadow-[0_0_50px_rgba(16,185,129,0.06)]';
    case 'bookstore':
      return 'hover:border-orange-500/30 hover:shadow-[0_0_50px_rgba(249,115,22,0.06)]';
    case 'waypoint':
      return 'hover:border-cyan-500/30 hover:shadow-[0_0_50px_rgba(6,182,212,0.06)]';
    case 'chatbot':
      return 'hover:border-teal-500/30 hover:shadow-[0_0_50px_rgba(20,184,166,0.06)]';
    default:
      return 'hover:border-border-secondary/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.02)]';
  }
};

export default function ProjectCard({ project }) {

  return (
    <div 
      className={`bento-card group hover:-translate-y-1 transition-all duration-400 h-full flex flex-col text-left ${getProjectHoverStyle(project.id)}`}
    >
      {/* Preview Image Frame */}
      <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-bg-deep border border-border-primary/40 relative mb-6">
        <img 
          src={project.image} 
          alt={project.title} 
          decoding="async"
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-500 select-none ${project.imagePosition || 'object-center'}`} 
        />
      </div>

      {/* Content Details */}
      <div className="flex flex-col flex-grow text-left">
        {/* Header Row */}
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-xl font-bold text-text-primary group-hover:text-text-secondary transition-colors leading-tight">
            {project.title}
          </h3>
          <span className={`px-2 py-0.5 rounded text-[8px] font-semibold uppercase tracking-wider shrink-0 mt-1.5 ${
            project.status === 'In Progress' 
              ? 'bg-text-primary/[0.06] text-text-muted border border-text-faint/20' 
              : 'bg-bg-subtle text-text-ghost border border-border-primary'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Technical Key Metrics Block */}
        {project.metrics && (
          <div className="flex flex-wrap gap-1.5 mb-4 mt-1">
            {project.metrics.map((metric, idx) => (
              <span 
                key={idx} 
                className="text-[9px] font-mono px-2 py-0.5 rounded bg-bg-subtle text-text-dim border border-border-primary flex items-center gap-1 font-medium"
              >
                <BarChart3 size={10} className="text-text-ghost" /> {metric}
              </span>
            ))}
          </div>
        )}

        <p className="text-text-dim text-xs sm:text-sm leading-relaxed mb-6 font-light">
          {project.description}
        </p>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
          {project.tech.map((t, idx) => (
            <span key={idx} className={`text-[9px] sm:text-[10px] font-semibold px-2.5 py-0.5 rounded-md border ${getTechTagStyle(t)}`}>
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4 border-t border-border-primary">
          <a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs font-medium text-text-ghost hover:text-text-primary flex items-center gap-1.5 transition-colors"
          >
            <GithubIcon size={13} /> Repository
          </a>
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-medium text-text-primary hover:text-text-secondary flex items-center gap-1.5 transition-colors ml-auto"
            >
              <ExternalLink size={12} /> Live App
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
