import React, { useState } from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/portfolio';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeTab);

  return (
    <section id="projects" className="mb-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <p className="text-neutral-500">End-to-end executions from code to cloud.</p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex bg-white p-1 rounded-xl border border-neutral-200 shadow-sm">
          {['all', 'infrastructure', 'mlops', 'fullstack'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === tab 
                ? 'bg-black text-white shadow-md' 
                : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(300px,auto)]">
         {filteredProjects.map((project, idx) => (
           <div key={idx} className={project.size}>
              <ProjectCard {...project} delay={idx * 100} />
           </div>
         ))}
      </div>
    </section>
  );
};

export default Projects;