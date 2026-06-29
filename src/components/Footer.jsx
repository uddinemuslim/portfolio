import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer id="contact" className="max-w-[1100px] mx-auto px-8 pt-24 pb-28 border-t border-slate-900/5 text-center fade-in">
      <h2 className="text-4xl font-extrabold tracking-tight text-[#0b1329] mb-3">
        Let's build something.
      </h2>
      <p className="text-[#64748b]">
        Currently open for new opportunities and collaborations.
      </p>
      
      <a 
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold rounded-lg shadow-[0_4px_14px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(37,99,235,0.4)] mt-8 mb-14"
      >
        Say Hello
      </a>

      <div className="flex justify-center gap-10 font-mono">
        <a 
          href={personalInfo.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 text-[#64748b] hover:text-[#2563eb] font-medium text-[0.9rem] transition-all duration-200 group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className="w-[18px] h-[18px] fill-current transition-transform duration-200 group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.76-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.004 2.043.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.244 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.623-5.48 5.92.43.372.823 1.102.823 2.222 0 1.606-.014 2.9-.014 3.293 0 .32.216.694.825.577C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
        <a 
          href={personalInfo.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 text-[#64748b] hover:text-[#2563eb] font-medium text-[0.9rem] transition-all duration-200 group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className="w-[18px] h-[18px] fill-current transition-transform duration-200 group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.938v5.668H9.357V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.602 0 4.267 2.372 4.267 5.456v6.287zM5.337 7.433c-1.144 0-2.071-.928-2.071-2.071 0-1.145.927-2.072 2.071-2.072 1.145 0 2.071.927 2.071 2.072 0 1.143-.926 2.071-2.071 2.071zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.725v20.549C0 23.229.792 24 1.771 24h20.451C23.206 24 24 23.229 24 22.274V1.725C24 .771 23.206 0 22.225 0z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
