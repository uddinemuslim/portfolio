import React from 'react';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero() {
  const downloadResume = () => {
    const resumeUrl = personalInfo.resumePath;
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Muslim-Uddin-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header id="hero" className="min-h-screen flex items-center px-8 pt-30 pb-20 relative z-10 hero-section fade-in">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center hero-container">
        
        {/* Left Content */}
        <div className="flex flex-col gap-7 z-20 text-left lg:text-left md:text-center hero-left">
          <div className="inline-flex items-center gap-2.5 bg-blue-50/80 text-[#2563eb] px-4 py-2 rounded-full font-mono text-[0.85rem] font-semibold w-fit border border-blue-600/10 md:mx-auto lg:ml-0 hero-greeting">
            <span className="w-1.5 h-1.5 bg-[#2563eb] rounded-full inline-block relative badge-dot after:content-[''] after:absolute after:w-full after:h-full after:bg-[#2563eb] after:rounded-full after:left-0 after:top-0 after:animate-[ripple_1.5s_infinite_ease-out]"></span>
            <span className="greeting-text">Hi, I'm Muslim Uddin</span>
            <span className="greeting-emoji inline-block origin-[70%_70%] animate-[wave-hand_2.5s_infinite_ise-in-out]">👋</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] text-[#0b1329] m-0 hero-title">
            <span className="line-1 inline-block whitespace-nowrap">AI/ML Analyst &</span><br />
            <span className="line-2 inline-block whitespace-nowrap bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Full-Stack Developer
            </span>
          </h1>

          <p className="text-lg text-[#64748b] leading-relaxed max-w-[600px] m-0 md:mx-auto lg:ml-0 hero-description">
            {personalInfo.tagline}
          </p>

          {/* Badge Pills */}
          <div className="flex flex-wrap gap-3 md:justify-center lg:justify-start hero-badges">
            <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-900/5 text-[#0b1329] rounded-lg text-xs font-semibold border border-slate-900/5 transition-all duration-200 hover:bg-blue-50 hover:text-[#2563eb] hover:border-blue-600/15 hover:-translate-y-0.5 hover:shadow-sm badge-pill">
              <span className="text-base inline-flex items-center badge-icon">🎓</span>
              IIT Guwahati
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-900/5 text-[#0b1329] rounded-lg text-xs font-semibold border border-slate-900/5 transition-all duration-200 hover:bg-blue-50 hover:text-[#2563eb] hover:border-blue-600/15 hover:-translate-y-0.5 hover:shadow-sm badge-pill">
              <span className="text-base inline-flex items-center badge-icon">🤖</span>
              AI / ML Enthusiast
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-900/5 text-[#0b1329] rounded-lg text-xs font-semibold border border-slate-900/5 transition-all duration-200 hover:bg-blue-50 hover:text-[#2563eb] hover:border-blue-600/15 hover:-translate-y-0.5 hover:shadow-sm badge-pill">
              <span className="text-base inline-flex items-center badge-icon">🌐</span>
              Full-Stack Developer
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 md:justify-center lg:justify-start hero-buttons">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold rounded-lg shadow-[0_4px_14px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(37,99,235,0.4)] text-[0.95rem] h-12 box-border btn btn-primary"
            >
              <span className="text-[1.1rem]">💼</span>
              View Projects
            </a>
            <button 
              onClick={downloadResume}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border-1.5 border-slate-900/15 text-[#0b1329] bg-transparent font-semibold rounded-lg transition-all duration-300 hover:bg-slate-900/5 hover:border-slate-900/30 hover:-translate-y-0.5 text-[0.95rem] h-12 box-border btn btn-outline"
            >
              <span className="text-[1.1rem]">⬇️</span>
              Download Resume
            </button>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border-1.5 border-slate-900/15 text-[#0b1329] bg-transparent font-semibold rounded-lg transition-all duration-300 hover:bg-slate-900/5 hover:border-slate-900/30 hover:-translate-y-0.5 text-[0.95rem] h-12 box-border btn btn-outline"
            >
              <span className="text-[1.1rem]">✉️</span>
              Contact Me
            </a>
          </div>

          {/* Stats Grid */}
          <div className="flex items-center justify-between mt-6 px-7 py-5 bg-white/45 backdrop-blur-2xl rounded-2xl border border-white/60 shadow-md w-full max-w-[600px] md:mx-auto lg:ml-0 hero-stats">
            {stats.map((stat, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-3 stat-item">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-[1.25rem] flex-shrink-0 stat-icon ${stat.colorClass}`}>
                    {stat.icon}
                  </div>
                  <div className="flex flex-col stat-content">
                    <div className="text-[1.2rem] font-extrabold text-[#0b1329] leading-[1.1] stat-number">
                      {stat.number}
                    </div>
                    <div className="text-[0.75rem] text-[#64748b] font-medium stat-label">
                      {stat.label}
                    </div>
                  </div>
                </div>
                {idx < stats.length - 1 && (
                  <div className="w-[1px] h-8 bg-slate-900/10 stat-divider"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center items-center min-h-[600px] w-full z-15 hero-right">
          
          {/* Curved SVG Path */}
          <svg className="absolute -top-[5%] -left-[5%] w-[110%] h-[110%] z-2 pointer-events-none animate-[curve-float_6s_infinite_ease-in-out] curved-path" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,380 C180,440 380,80 430,220" stroke="url(#premium-gradient)" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 12" />
            <defs>
              <linearGradient id="premium-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(37, 99, 235, 0.45)" />
                <stop offset="50%" stopColor="rgba(99, 102, 241, 0.25)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.05)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Dot Pattern */}
          <div className="absolute -top-[10%] -right-[10%] w-[180px] h-[240px] bg-[radial-gradient(rgba(37,99,235,0.12)_1.5px,transparent_1.5px)] bg-[length:14px_14px] z-2 pointer-events-none dot-pattern"></div>

          {/* Blob Background */}
          <div className="absolute w-[420px] h-[420px] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,rgba(99,102,241,0.1)_50%,rgba(236,72,153,0.03)_100%)] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] blur-[40px] z-1 animate-[blob-float_15s_infinite_ease-in-out_alternate] hero-blob"></div>

          {/* Profile Wrapper */}
          <div className="relative w-full max-w-[420px] h-[500px] z-5 animate-[profile-float_6s_infinite_ease-in-out] overflow-visible lg:left-[45px] profile-image-wrapper">
            <img src="myImg.png" alt={`${personalInfo.name} - AI & Full-Stack Developer`} className="relative z-2 w-full h-full object-cover object-bottom rounded-b-[24px] transition-transform duration-500 hover:scale-[1.03] profile-image" />
            
            {/* Floating Tech Stack Icons */}
            <div className="absolute w-[54px] h-[54px] rounded-full bg-white border border-slate-900/8 flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-30 animate-[icon-float_6s_infinite_ease-in-out] hover:scale-118 hover:rotate-8 hover:shadow-xl hover:border-blue-600/25 top-[24%] left-[11%] tech-icon-python" title="Python">
              <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.933 2C6.732 2 7.027 4.253 7.027 4.253L7.042 6.582H12.04C14.735 6.582 14.908 8.874 14.908 8.874V13.82C14.908 13.82 17.135 13.565 17.135 8.949C17.135 4.333 14.88 2 11.933 2Z" fill="#3776AB" />
                <path d="M12.067 22C17.268 22 16.973 19.747 16.973 19.747L16.958 17.418H11.96C9.265 17.418 9.092 15.126 9.092 15.126V10.18C9.092 10.18 6.865 10.435 6.865 15.051C6.865 19.667 9.12 22 12.067 22Z" fill="#FFE054" />
                <circle cx="9.5" cy="4.5" r="0.75" fill="#FFFFFF" />
                <circle cx="14.5" cy="19.5" r="0.75" fill="#111111" />
              </svg>
            </div>
            
            <div className="absolute w-[54px] h-[54px] rounded-full bg-white border border-slate-900/8 flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-30 animate-[icon-float_6s_infinite_ease-in-out] hover:scale-118 hover:rotate-8 hover:shadow-xl hover:border-blue-600/25 top-[6%] left-[24%] [animation-delay:0.6s] tech-icon-numpy" title="NumPy">
              <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="8" height="8" rx="1.5" fill="#013243" />
                <rect x="14" y="2" width="8" height="8" rx="1.5" fill="#4DABF7" />
                <rect x="2" y="14" width="8" height="8" rx="1.5" fill="#4DABF7" />
                <rect x="14" y="14" width="8" height="8" rx="1.5" fill="#013243" />
              </svg>
            </div>
            
            <div className="absolute w-[54px] h-[54px] rounded-full bg-white border border-slate-900/8 flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-30 animate-[icon-float_6s_infinite_ease-in-out] hover:scale-118 hover:rotate-8 hover:shadow-xl hover:border-blue-600/25 top-[-4%] left-[42%] [animation-delay:1.2s] tech-icon-pytorch" title="PyTorch">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="#EE4C2C" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.5 2 4 6 4 11c0 6.5 5 11 8 11s8-4.5 8-11c0-5-2.5-9-8-9zm-2.5 7.5c.8-1.5 2.5-3 2.5-3s1.7 1.5 2.5 3c.8 1.5.5 3.5-.5 4.5S10.5 14 9.5 13.5s-.8-2.5 0-4z" />
              </svg>
            </div>
            
            <div className="absolute w-[54px] h-[54px] rounded-full bg-white border border-slate-900/8 flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-30 animate-[icon-float_6s_infinite_ease-in-out] hover:scale-118 hover:rotate-8 hover:shadow-xl hover:border-blue-600/25 top-[-7%] left-[64%] [animation-delay:1.8s] tech-icon-scikit" title="Scikit-Learn">
              <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="12" r="6" fill="#3776AB" opacity="0.8" />
                <circle cx="16" cy="12" r="6" fill="#FF9900" opacity="0.8" />
                <circle cx="12" cy="8" r="4" fill="#F0E68C" opacity="0.9" />
              </svg>
            </div>
            
            <div className="absolute w-[54px] h-[54px] rounded-full bg-white border border-slate-900/8 flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-30 animate-[icon-float_6s_infinite_ease-in-out] hover:scale-118 hover:rotate-8 hover:shadow-xl hover:border-blue-600/25 top-[0%] left-[86%] [animation-delay:2.4s] tech-icon-html" title="HTML5">
              <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 2h21l-1.9 19-8.6 3-8.6-3L1.5 2z" fill="#E34F26" />
                <path d="M12 3.8v17.2l6.8-2.4 1.5-14.8H12z" fill="#EF652A" />
                <path d="M12 8.5H8.7l.2 2.5H12v2.5H8.9l.3 3.1 2.8.8v-8.9z" fill="#EDEDED" />
                <path d="M12 8.5h3.4l-.3 3.5H12v2.5h3l-.3 3-2.7.8v-9.8z" fill="#FFFFFF" />
              </svg>
            </div>
            
            <div className="absolute w-[54px] h-[54px] rounded-full bg-white border border-slate-900/8 flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-30 animate-[icon-float_6s_infinite_ease-in-out] hover:scale-118 hover:rotate-8 hover:shadow-xl hover:border-blue-600/25 top-[17%] left-[102%] [animation-delay:3.0s] tech-icon-css" title="CSS3">
              <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 2h21l-1.9 19-8.6 3-8.6-3L1.5 2z" fill="#1572B6" />
                <path d="M12 3.8v17.2l6.8-2.4 1.5-14.8H12z" fill="#33A9DC" />
                <path d="M12 8.5h-3l-.2-2.5H12v-2.5H6.2l.6 7.5H12v-2.5z" fill="#EDEDED" />
                <path d="M12 11h3.1l-.3 3.5-2.8.8v2.5l5.6-2-1.5-14.8H12V11z" fill="#FFFFFF" />
              </svg>
            </div>
            
            <div className="absolute w-[54px] h-[54px] rounded-full bg-white border border-slate-900/8 flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-30 animate-[icon-float_6s_infinite_ease-in-out] hover:scale-118 hover:rotate-8 hover:shadow-xl hover:border-blue-600/25 top-[39%] left-[113%] [animation-delay:3.6s] tech-icon-js" title="JavaScript">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="24" height="24" fill="#F7DF1E" />
                <path d="M12.15 19.33c0 1.45-.87 2.42-2.45 2.42-1.42 0-2.32-.8-2.32-2.15h1.56c0 .63.36 1 .83 1 .48 0 .8-.26.8-.93v-8.3h1.58v8.96zm6.36 1.05c0 1-.84 1.43-1.85 1.43-1.12 0-1.78-.52-1.92-1.43h1.53c.06.33.28.52.55.52.26 0 .4-.1.4-.33 0-.58-.96-.45-1.46-.8-.43-.3-.66-.75-.66-1.37 0-.96.76-1.57 1.83-1.57 1 0 1.63.48 1.73 1.35h-1.48c-.06-.27-.22-.44-.45-.44-.2 0-.33.1-.33.27 0 .42.96.33 1.43.68.4.32.66.75.66 1.4z" fill="#000000" />
              </svg>
            </div>
            
            <div className="absolute w-[54px] h-[54px] rounded-full bg-white border border-slate-900/8 flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-30 animate-[icon-float_6s_infinite_ease-in-out] hover:scale-118 hover:rotate-8 hover:shadow-xl hover:border-blue-600/25 top-[64%] left-[111%] [animation-delay:4.2s] tech-icon-sql" title="SQL">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="#00758F" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 7C7.58 9 4 7.88 4 6.5S7.58 4 12 4s8 1.12 8 2.5S16.42 9 12 9zm0 3c-5.52 0-10-1.02-10-2.5v4c0 1.48 4.48 2.5 10 2.5s10-1.02 10-2.5v-4c0 1.48-4.48 2.5-10 2.5zm0 3c-5.52 0-10-1.02-10-2.5v4C2 20.48 6.48 21.5 12 21.5s10-1.02 10-2.5v-4c0 1.48-4.48 2.5-10 2.5z" />
              </svg>
            </div>
            
            <div className="absolute w-[54px] h-[54px] rounded-full bg-white border border-slate-900/8 flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-30 animate-[icon-float_6s_infinite_ease-in-out] hover:scale-118 hover:rotate-8 hover:shadow-xl hover:border-blue-600/25 top-[87%] left-[94%] [animation-delay:4.8s] tech-icon-react" title="React">
              <svg viewBox="-11.5 -10.23174 23 20.46348" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
                <g stroke="#61DAFB" strokeWidth="1.2" fill="none">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
            </div>
          </div>

          {/* Floating Code Snippet Box */}
          <div className="absolute left-[-50px] top-[55%] -translate-y-1/2 bg-[#0f172a]/85 backdrop-blur-[16px] text-[#cbd5e1] p-4.5 rounded-xl border border-white/10 shadow-lg font-mono text-[0.8rem] leading-[1.6] w-[245px] z-25 animate-[code-float_6s_infinite_ease-in-out_1s] code-box">
            <div className="flex justify-between items-center mb-3 border-b border-white/8 pb-2 code-header">
              <div className="flex gap-[5px] code-window-dots">
                <span className="w-1.5 h-1.5 rounded-full inline-block bg-[#ef4444] dot red"></span>
                <span className="w-1.5 h-1.5 rounded-full inline-block bg-[#f59e0b] dot yellow"></span>
                <span className="w-1.5 h-1.5 rounded-full inline-block bg-[#10b981] dot green"></span>
              </div>
              <span className="text-[0.75rem] text-[#64748b] code-icon">&lt;/&gt;</span>
            </div>
            <div className="text-left code-content">
              <div><span className="text-[#f472b6] font-medium code-keyword">const</span> <span className="text-[#60a5fa] code-var">developer</span> = &#123;</div>
              <div className="pl-4 code-indent-1"><span className="text-[#94a3b8] code-prop">role</span>: <span className="text-[#34d399] code-string">"AI &amp; Full-Stack"</span>,</div>
              <div className="pl-4 code-indent-1">
                <span className="text-[#94a3b8] code-prop">skills</span>: [<span className="text-[#34d399] code-string">"PyTorch"</span>, <span className="text-[#34d399] code-string">"React"</span>],
              </div>
              <div className="pl-4 code-indent-1"><span className="text-[#94a3b8] code-prop">passion</span>: <span className="text-[#34d399] code-string">"Impactful AI"</span></div>
              <div>&#125;;</div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
