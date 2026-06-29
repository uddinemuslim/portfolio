import React from 'react';
import { timelineData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="max-w-[1100px] mx-auto px-8 pt-24 pb-0 fade-in">
      <h3 className="text-2xl font-bold mb-12 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-1/2 after:height-[3px] after:bg-[#2563eb] after:h-[3px]">
        My IIT Journey
      </h3>
      <div className="border-l-2 border-dashed border-slate-900/10 pl-8 ml-4 timeline">
        {timelineData.map((item, idx) => (
          <div key={idx} className="relative mb-12 timeline-item">
            <div className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-[#2563eb] border-[3px] border-white shadow-[0_0_0_4px_rgba(37,99,235,0.15)] timeline-dot"></div>
            <h4 className="font-semibold text-lg text-[#0b1329]">{item.role}</h4>
            <p className="font-mono text-[#2563eb] text-xs font-semibold mt-1 timeline-date">
              {item.date}
            </p>
            <p className="text-[#64748b] mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
