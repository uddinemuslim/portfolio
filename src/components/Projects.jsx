import React from 'react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="max-w-[1100px] mx-auto px-8 pt-24 pb-0 fade-in">
      <h3 className="text-2xl font-bold mb-12 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-1/2 after:height-[3px] after:bg-[#2563eb] after:h-[3px]">
        Featured Projects
      </h3>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-6">
        {projectsData.map((project, idx) => (
          <div key={idx} className="bg-white/65 backdrop-blur-md p-8 rounded-2xl shadow-md border border-slate-900/5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-blue-600/15 hover:shadow-lg project-card">
            <div className="project-content">
              <h4 className="font-semibold text-lg text-[#0b1329] mb-2">{project.title}</h4>
              <p className="text-[#64748b] text-sm leading-relaxed mb-4">{project.description}</p>
              
              <p className="mt-5">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#2563eb] font-semibold text-[0.95rem] inline-flex items-center gap-1.5 transition-all duration-200 hover:text-[#1d4ed8] hover:gap-2"
                >
                  {project.linkLabel}
                </a>
              </p>
              
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="inline-flex items-center gap-1.5 bg-slate-900/5 text-[#0b1329] px-3 py-1.5 rounded-md text-xs font-medium border border-slate-900/5 whitespace-nowrap transition-all duration-200 hover:bg-blue-50 hover:text-[#2563eb] hover:border-blue-600/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
