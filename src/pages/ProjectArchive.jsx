import React, { useState } from 'react';
import { Search } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';

export default function ProjectArchive() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'full-stack', name: 'Full Stack' },
    { id: 'ai-ml', name: 'AI / ML & GenAI' },
    { id: 'desktop', name: 'Java / Desktop' }
  ];

  const filteredProjects = projectsData.filter(project => {
    const query = searchQuery.toLowerCase().trim();
    
    // Check if title, description, tech tags or keyword search lists match
    const matchesSearch = 
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.techSearch.toLowerCase().includes(query) ||
      project.tech.some(t => t.toLowerCase().includes(query));

    const matchesCategory = 
      activeCategory === 'all' || 
      project.categories.includes(activeCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 pt-36 pb-24 text-left">
      
      {/* Header Introduction */}
      <div className="text-left mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="section-line"></div>
          <span className="text-text-ghost font-medium tracking-[0.2em] uppercase text-[10px]">Project Catalog</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-text-primary leading-none uppercase mb-6">
          ALL PROJECTS
        </h1>
        <p className="max-w-2xl text-sm sm:text-base text-text-dim leading-relaxed font-light">
          An organized repository of production-grade Full Stack web architectures, advanced AI Agents, Deep Learning implementations, and desktop system utilities.
        </p>
      </div>

      {/* Search & Filter Controls Widget */}
      <div className="bento-card p-5 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-5">
        
        {/* Search Input */}
        <div className="relative flex-grow max-w-md w-full">
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-faint">
            <Search size={14} />
          </span>
          <input 
            type="text" 
            placeholder="Search by name, technology, or description..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-border-primary bg-bg-deep focus:outline-none focus:ring-1 focus:ring-text-faint/30 focus:border-text-faint/30 text-text-secondary placeholder:text-text-faint/60 transition-all font-medium" 
          />
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-2 items-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-[10px] font-semibold rounded-lg border transition-all uppercase tracking-[0.15em] ${
                activeCategory === cat.id
                  ? 'bg-text-primary text-bg-pure font-bold border-text-primary'
                  : 'border-border-primary text-text-ghost hover:text-text-secondary hover:border-border-secondary'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      ) : (
        /* No Projects Empty State */
        <div className="text-center py-20">
          <div className="w-16 h-16 rounded-full bg-bg-subtle border border-border-primary flex items-center justify-center mx-auto mb-6 text-text-faint">
            <Search size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-2">No projects match your criteria</h3>
          <p className="text-sm text-text-dim font-light">Try adjusting your filters or search terms.</p>
        </div>
      )}

    </main>
  );
}
