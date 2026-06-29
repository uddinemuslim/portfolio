import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/75 backdrop-blur-2xl z-[1000] border-b border-slate-900/5">
      <div className="max-w-[1200px] mx-auto px-8 py-5 flex justify-between items-center">
        <a className="font-bold text-xl text-[#0b1329] tracking-tight hover:text-[#2563eb] transition-colors duration-300" href="#hero">
          {personalInfo.logoText}
        </a>
        
        <ul className="hidden md:flex items-center gap-10 list-none">
          <li>
            <a href="#hero" className="text-[#64748b] font-medium text-[0.95rem] hover:text-[#2563eb] transition-colors duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="text-[#64748b] font-medium text-[0.95rem] hover:text-[#2563eb] transition-colors duration-300">
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" className="text-[#64748b] font-medium text-[0.95rem] hover:text-[#2563eb] transition-colors duration-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="text-[#64748b] font-medium text-[0.95rem] hover:text-[#2563eb] transition-colors duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href={personalInfo.resumePath} target="_blank" rel="noopener noreferrer" className="text-[#64748b] font-medium text-[0.95rem] hover:text-[#2563eb] transition-colors duration-300">
              Resume
            </a>
          </li>
        </ul>

        <a 
          href={`mailto:${personalInfo.email}`} 
          className="border border-[#2563eb] px-5 py-2.5 rounded-lg text-[#2563eb] font-semibold transition-all duration-300 hover:bg-[#2563eb] hover:text-white hover:shadow-[0_4px_14px_rgba(37,99,235,0.35)] hover:-translate-y-0.5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
