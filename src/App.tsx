import { useState, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';

import Header from './components/Header.tsx';
import About from './components/About.tsx';
import Projects from './components/Project.tsx';
import Certifications from './components/Certifications.tsx';
import Footer from './components/Footer.tsx';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const certificationsRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLElement | null>) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200 relative overflow-x-hidden h-48 overflow-y-auto scroll-pt-40 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-[#07090e] [&::-webkit-scrollbar-thumb]:bg-blue-400 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-blue-500">
      <Analytics />

      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none z-0" />

      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl px-6 py-3.5 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transition-all">
        <span 
          onClick={() => scrollToSection(headerRef)}
          className="text-lg font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
        >
          ALEF JUSTIN LORESCA
        </span>

        <div id="menuLinks" className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium text-slate-300">
          <button onClick={() => scrollToSection(headerRef)} className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-all duration-200">Home</button>
          <button onClick={() => scrollToSection(aboutRef)} className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-all duration-200">About Me</button>
          <button onClick={() => scrollToSection(stackRef)} className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-all duration-200">Stacks</button>
          <button onClick={() => scrollToSection(projectsRef)} className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-all duration-200">Projects</button>
          <button onClick={() => scrollToSection(certificationsRef)} className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-all duration-200">Certifications</button>
          <button onClick={() => scrollToSection(footerRef)} className="px-3 py-1.5 rounded-lg text-blue-400 border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-200 shadow-sm">Contact</button>
        </div>

        <button
          className="md:hidden text-slate-300 hover:text-white focus:outline-none p-1 rounded-lg bg-white/5 border border-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <img
            className="w-6 h-6 invert brightness-200"
            src="./images/Icons/Menu.png"
            alt="Menu icon"
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 top-0 left-0 w-screen h-screen h-[100dvh] z-50 bg-black/90 backdrop-blur-2xl flex flex-col justify-center items-center p-8 space-y-6 md:hidden animate-fade-in">
          <button
            className="absolute w-20 top-10 right-10 p-2 rounded-full bg-white/10 border border-white/20 text-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>

          <div id="mobileMenuLinks" className="flex flex-col items-center space-y-6 text-xl font-medium text-slate-200">
            <button onClick={() => { scrollToSection(headerRef); setMenuOpen(false); }} className="hover:text-blue-400 transition-colors">Home</button>
            <button onClick={() => { scrollToSection(aboutRef); setMenuOpen(false); }} className="hover:text-blue-400 transition-colors">About Me</button>
            <button onClick={() => { scrollToSection(stackRef); setMenuOpen(false); }} className="hover:text-blue-400 transition-colors">Stacks</button>
            <button onClick={() => { scrollToSection(projectsRef); setMenuOpen(false); }} className="hover:text-blue-400 transition-colors">Projects</button>
            <button onClick={() => { scrollToSection(certificationsRef); setMenuOpen(false); }} className="hover:text-blue-400 transition-colors">Certifications</button>
            <button onClick={() => { scrollToSection(footerRef); setMenuOpen(false); }} className="px-6 py-2 rounded-xl text-blue-300 border border-blue-500/40 bg-blue-500/20 hover:bg-blue-500/30">Contact</button>
          </div>
        </div>
      )}

      <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 relative z-10">
        <header ref={headerRef} className="pt-8">
          <Header footerRef={footerRef} projectsRef={projectsRef} />
        </header>

        <main className="space-y-28">
          <section id="aboutSection" ref={aboutRef}>
            <div>
              <About footerRef={footerRef} stackRef={stackRef} />
            </div>
          </section>

          <section id="projectsSection" ref={projectsRef} className="space-y-8">
            <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                SELECTED WORKS
              </h3>
            </div>
            <Projects />
          </section>

          <section id="certificationsSection" ref={certificationsRef} className="space-y-8">
            <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                CERTIFICATIONS
              </h3>
            </div>
            <Certifications />
          </section>
        </main>
        
        <Footer footerRef={footerRef} />
      </div>
    </div>
  );
}

export default App;