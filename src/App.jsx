import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Scroll indicator hide/show logic
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Fade-in animation Intersection Observer
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      faders.forEach(fader => {
        appearOnScroll.unobserve(fader);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen text-[#0b1329]">
      <Navbar />
      
      <main>
        <div className="relative">
          <Hero />
          
          {/* Scroll Indicator */}
          <div 
            className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20 transition-all duration-300 ${
              isScrolled ? 'opacity-0 invisible pointer-events-none translate-y-2.5' : 'opacity-100'
            }`}
          >
            <div className="w-[22px] h-[36px] border-2 border-[#64748b] rounded-xl flex justify-center pt-1.5">
              <span className="w-1 h-2 bg-[#64748b] rounded-sm animate-[scroll-wheel-slide_1.6s_infinite_ease-in-out]"></span>
            </div>
            <p className="text-[0.75rem] text-[#64748b] m-0 tracking-[0.12em] uppercase font-semibold">
              Scroll to explore
            </p>
            <div className="flex items-center justify-center text-[#64748b] animate-[arrow-bounce-subtle_1.8s_infinite_ease-in-out]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <Experience />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}
