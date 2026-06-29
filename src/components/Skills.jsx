import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="max-w-[1100px] mx-auto px-8 pt-24 pb-0 fade-in">
      <h3 className="text-2xl font-bold mb-3 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-1/2 after:height-[3px] after:bg-[#2563eb] after:h-[3px]">
        Tech Stack
      </h3>
      <p className="text-[#64748b] mb-12 mt-6">
        A focused toolkit for computer vision, ML, and production-ready web development.
      </p>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-6">
        {skillsData.map((category, idx) => (
          <article key={idx} className="bg-white/65 backdrop-blur-md p-8 rounded-2xl shadow-md border border-slate-900/5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-blue-600/15 hover:shadow-lg">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl flex items-center" aria-hidden="true">
                {category.icon}
              </span>
              <h4 className="font-semibold text-lg text-[#0b1329]">{category.category}</h4>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-5">
              {category.tags.map((tag, tIdx) => (
                <span 
                  key={tIdx} 
                  className="inline-flex items-center gap-1.5 bg-slate-900/5 text-[#0b1329] px-3 py-1.5 rounded-md text-xs font-medium border border-slate-900/5 whitespace-nowrap transition-all duration-200 hover:bg-blue-50 hover:text-[#2563eb] hover:border-blue-600/15"
                >
                  <img src={tag.logo} alt={`${tag.name} logo`} className="w-3.5 h-3.5 flex-none object-contain inline-block align-middle" />
                  {tag.name}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
