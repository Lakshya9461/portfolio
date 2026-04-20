"use client";

import React, { useEffect, useState, useRef } from "react";
import PortfolioHero from "@/components/ui/portfolio-hero";
import SystemTerminal from "@/components/ui/system-terminal";
import LogoLoop from "@/components/ui/LogoLoop";
import { SiPython, SiFlutter, SiJavascript, SiElectron, SiDocker, SiLinux, SiReact, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { Github, Linkedin, Mail, ExternalLink, Briefcase, Code2, Terminal, Clock, BookOpen, ChevronsDown, ChevronRight } from "lucide-react";

// Hook for scroll reveal animations without heavy libraries
function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function RevealSection({ children, className = "", delay = 0, ...props }: React.ComponentPropsWithoutRef<"div"> & { delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Set initial theme based on system preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(!window.matchMedia('(prefers-color-scheme: light)').matches);
    }
  }, []);

  useEffect(() => {
    // Update document class when theme changes
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const techLogos = [
    { node: <SiPython size={48} className={isDarkMode ? "text-[#C3E41D]" : "text-[#a3c91a]"} />, title: "Python" },
    { node: <SiFlutter size={48} className={isDarkMode ? "text-white" : "text-blue-600"} />, title: "Flutter" },
    { node: <SiJavascript size={48} className="text-yellow-500" />, title: "JavaScript" },
    { node: <SiElectron size={48} className="text-cyan-500" />, title: "Electron" },
    { node: <SiDocker size={48} className="text-blue-600" />, title: "Docker" },
    { node: <SiLinux size={48} className={isDarkMode ? "text-white" : "text-gray-800"} />, title: "Linux" },
    { node: <SiReact size={48} className="text-cyan-600" />, title: "React" },
    { node: <SiNextdotjs size={48} className={isDarkMode ? "text-white" : "text-black"} />, title: "Next.js" },
    { node: <SiTailwindcss size={48} className="text-cyan-600" />, title: "Tailwind CSS" },
    { node: <SiTypescript size={48} className="text-blue-600" />, title: "TypeScript" },
  ];

  const MAINTENANCE_MODE = false;

  if (MAINTENANCE_MODE) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-foreground p-4">
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8 p-8 sm:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-black/50">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>Under Maintenance</h1>
            <p className="text-neutral-400 text-lg leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              I'm currently putting the final polish on my portfolio. Please check back soon!
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen selection:bg-[#C3E41D]/30 selection:text-white overflow-hidden" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      {/* Subtle Animated Background Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: isDarkMode ? 'radial-gradient(ellipse_60%_60%_at_50%_-10%,rgba(195,228,29,0.03),rgba(0,0,0,1))' : 'radial-gradient(ellipse_60%_60%_at_50%_-10%,rgba(195,228,29,0.08),rgba(250,250,250,1))' }} />
      
      <div className="relative z-10">
        {/* Sticky Navbar */}
        <header className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-2xl shadow-sm" style={{ borderColor: isDarkMode ? 'var(--nav-border)' : 'var(--nav-border)', backgroundColor: isDarkMode ? 'var(--nav-bg)' : 'var(--nav-bg)' }}>
          <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <span className="font-black text-xl tracking-tighter transition-colors cursor-pointer" style={{ fontFamily: 'Outfit, sans-serif', color: isDarkMode ? 'white' : '#171717' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Lakshya</span>
            <ul className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">
              <li><a href="#about" className="relative transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#C3E41D] after:transition-all after:duration-300" style={{ color: isDarkMode ? '#a3a3a3' : '#525252' }}><span className="hover:text-[#171717]">About</span></a></li>
              <li><a href="#experience" className="relative transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#C3E41D] after:transition-all after:duration-300" style={{ color: isDarkMode ? '#a3a3a3' : '#525252' }}><span className="hover:text-[#171717]">Experience</span></a></li>
              <li><a href="#projects" className="relative transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#C3E41D] after:transition-all after:duration-300" style={{ color: isDarkMode ? '#a3a3a3' : '#525252' }}><span className="hover:text-[#171717]">Work</span></a></li>
              <li><a href="#blog" className="relative transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#C3E41D] after:transition-all after:duration-300" style={{ color: isDarkMode ? '#a3a3a3' : '#525252' }}><span className="hover:text-[#171717]">Writing</span></a></li>
            </ul>
            <div className="flex items-center gap-4">
              <button onClick={toggleTheme} className="p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95" style={{ backgroundColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }} aria-label="Toggle theme">
                {isDarkMode ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                )}
              </button>
              <a href="#contact" className="px-5 py-2.5 text-sm font-bold text-black bg-[#C3E41D] rounded-full hover:bg-[#d4f542] hover:scale-105 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(195,228,29,0.2)] hover:shadow-[0_0_30px_rgba(195,228,29,0.4)]">
                Let's Talk
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center">
          <PortfolioHero />
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-neutral-500 hover:text-[#C3E41D] hover:scale-110 active:scale-90 active:text-white transition-all duration-300 inline-block drop-shadow-md cursor-pointer"><ChevronsDown size={28} /></a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 lg:py-40 px-6 md:px-12 max-w-7xl mx-auto space-y-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <RevealSection className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-tight" style={{ fontFamily: 'Outfit, sans-serif', color: isDarkMode ? 'white' : '#171717' }}>
                Engineer.<br/><span className="text-[#C3E41D]">Innovator.</span><br/>System Builder.
              </h2>
              <div className="space-y-6 text-lg md:text-xl font-light leading-[1.8]" style={{ color: isDarkMode ? '#a3a3a3' : '#525252' }}>
                <p>
                  I specialize in engineering scalable backend services, local-first applications, and privacy-focused software. My work ranges from Flutter mobile applications (CashWand) and Electron desktop browsers (Aegis) to zero-trust Linux architectures.
                </p>
                <p>
                  I am a Computer Science undergraduate at JK Lakshmipat University. My development philosophy revolves around clean architectures (like TDD), maintaining absolute control through self-hosted deployments, and solving problems rigorously.
                </p>
              </div>
            </RevealSection>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { label: 'Linux Systems', icon: <Terminal size={22} className="transition-colors" style={{ color: isDarkMode ? '#a3a3a3' : '#525252' }} /> },
                { label: 'Backend & Apps', icon: <Code2 size={22} className="transition-colors" style={{ color: isDarkMode ? '#a3a3a3' : '#525252' }} /> },
                { label: 'AI Projects', icon: <BookOpen size={22} className="transition-colors" style={{ color: isDarkMode ? '#a3a3a3' : '#525252' }} /> },
                { label: 'Docker & Hosting', icon: <Clock size={22} className="transition-colors" style={{ color: isDarkMode ? '#a3a3a3' : '#525252' }} /> },
              ].map((skill, i) => (
                <RevealSection key={i} delay={i * 100} className="p-8 rounded-3xl backdrop-blur-2xl border shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:border-[#C3E41D]/30 hover:-translate-y-2 transition-all duration-500 group cursor-default" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', '--card-hover-bg': 'var(--card-hover-bg)' } as any}>
                  <div className="mb-6 w-12 h-12 rounded-full border flex items-center justify-center group-hover:scale-110 group-hover:bg-[#C3E41D]/10 group-hover:border-[#C3E41D]/30 transition-all duration-300" style={{ backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
                    {skill.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold tracking-wide" style={{ color: isDarkMode ? 'white' : '#171717' }}>{skill.label}</h3>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech" className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16 relative z-10">
          <RevealSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6" style={{ fontFamily: 'Outfit, sans-serif', color: isDarkMode ? 'white' : '#171717' }}>Tech Stack</h2>
            <p className="text-lg md:text-xl font-light leading-[1.8]" style={{ color: isDarkMode ? '#a3a3a3' : '#525252' }}>The core technologies and tools I prioritize to build highly reliable applications and infrastructure.</p>
          </RevealSection>

          <RevealSection delay={100} className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
              {techLogos.map((tech, i) => (
                <div
                  key={tech.title}
                  className="group flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-default"
                  style={{
                    backgroundColor: isDarkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                    borderColor: isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                  }}
                >
                  <div className="transform transition-transform duration-300 group-hover:scale-110">
                    {tech.node}
                  </div>
                  <span className="mt-4 text-sm font-semibold tracking-wide" style={{ color: isDarkMode ? '#d4d4d4' : '#404040' }}>
                    {tech.title}
                  </span>
                </div>
              ))}
            </div>
          </RevealSection>
        </section>

        {/* System Terminal Section */}
        <section id="terminal" className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-12 relative z-10 w-full flex flex-col items-center">
          <RevealSection className="text-center max-w-3xl mx-auto w-full">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6" style={{ fontFamily: 'Outfit, sans-serif', color: isDarkMode ? 'white' : '#171717' }}>System Access</h2>
            <p className="text-lg md:text-xl font-light leading-[1.8] mb-6" style={{ color: isDarkMode ? '#a3a3a3' : '#525252' }}>Gain direct access to my simulated deployment server. Click the commands to pull simulated environment configurations, container stats, and network traces.</p>
          </RevealSection>
          <RevealSection className="w-full" delay={200}>
            <SystemTerminal isDarkMode={isDarkMode} />
          </RevealSection>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-32 lg:py-40 border-y relative z-10" style={{ backgroundColor: 'var(--section-bg)', borderColor: 'var(--section-border)' }}>
          <div className="px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24">
            <RevealSection className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 rounded-xl border border-[#C3E41D]/20" style={{ backgroundColor: isDarkMode ? 'rgba(195,228,29,0.1)' : 'rgba(195,228,29,0.15)' }}>
                  <Briefcase className="text-[#C3E41D]" size={24} />
                </div>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter" style={{ fontFamily: 'Outfit, sans-serif', color: isDarkMode ? 'white' : '#171717' }}>Experience</h2>
              </div>
              <p className="text-lg md:text-xl font-light leading-[1.8]" style={{ color: isDarkMode ? '#a3a3a3' : '#525252' }}>
                The academic and technical stepping stones that have shaped my engineering approach and system architecture philosophy.
              </p>
            </RevealSection>

            <div className="lg:col-span-7 space-y-12 border-l-2 ml-4 md:ml-6 pl-8 md:pl-12 relative" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
              {[
                {
                  role: "Freelance Tech & AI Writer",
                  company: "Medium",
                  date: "Jan 2026 - Present",
                  desc: "Publishing deep-dive technical articles on Linux, self-hosting, and AI tools with a focus on practical, hands-on tutorials. Featured pieces include running 4 operating systems on a 4GB home server."
                },
                {
                  role: "B.Tech in Computer Science",
                  company: "JK Lakshmipat University",
                  date: "Aug 2024 - May 2028",
                  desc: "Focusing on core coursework including Machine Learning, Data Structures & Algorithms, System Design, and Databases. Continuously applying theory to real-world privacy and infrastructure projects."
                }
              ].map((exp, i) => (
                <RevealSection key={i} delay={i * 150} className="relative group">
                  <div className="absolute -left-[45px] md:-left-[61px] top-2 w-5 h-5 rounded-full border-2 group-hover:border-[#C3E41D] group-hover:scale-125 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(195,228,29,0.5)] z-10" style={{ backgroundColor: isDarkMode ? '#050505' : '#fafafa', borderColor: isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)' }} />
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: isDarkMode ? '#737373' : '#a3a3a3' }}>{exp.date}</span>
                    <h3 className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Outfit, sans-serif', color: isDarkMode ? 'white' : '#171717' }}>{exp.role}</h3>
                    <span className="text-sm md:text-base font-semibold text-[#C3E41D]">{exp.company}</span>
                  </div>
                  <p className="text-base md:text-lg font-light leading-[1.8]" style={{ color: isDarkMode ? '#a3a3a3' : '#525252' }}>{exp.desc}</p>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section id="projects" className="py-32 lg:py-40 px-6 md:px-12 max-w-7xl mx-auto space-y-20 relative z-10">
          <RevealSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter" style={{ fontFamily: 'Outfit, sans-serif', color: isDarkMode ? 'white' : '#171717' }}>Select Works</h2>
                <p className="text-lg font-light" style={{ color: isDarkMode ? '#a3a3a3' : '#525252' }}>Architectural systems and applications built for scale.</p>
              </div>
              <a href="https://github.com/Lakshya9461" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-[#C3E41D] group transition-colors px-6 py-3 rounded-full border backdrop-blur-md" style={{ color: isDarkMode ? 'white' : '#171717', backgroundColor: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)', borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
                View full compute archive <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "CashWand Finance Tracker",
                desc: "An offline-first Flutter mobile app for iOS/Android featuring local biometric locks, a domain-driven SQLite architecture, and Excel report generation.",
                tags: ["Flutter", "Dart", "SQLite"],
                github: "https://github.com/Lakshya9461/Cashwand",
                demo: "#",
                image: "/cashwand.png",
                color: "from-[#C3E41D]/10"
              },
              {
                title: "Aegis Privacy Browser",
                desc: "Secure Electron desktop browser engineered with a custom 500+ domain ad-blocker, context isolation, and multi-level anti-fingerprinting pipelines.",
                tags: ["Electron", "Chromium", "JS"],
                github: "https://github.com/Lakshya9461/Aegis-Browser",
                demo: "#",
                image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
                color: "from-blue-500/10"
              },
              {
                title: "Personal Home Server",
                desc: "Self-hosted media and file-sharing stack deployed on Debian Linux. Secured strictly via Cloudflare Tunnels and Tailscale zero-trust access networks.",
                tags: ["Linux", "Docker", "Tailscale"],
                github: "https://github.com/Lakshya9461",
                demo: "#",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
                color: "from-orange-500/10"
              },
              {
                title: "Voice-Controlled AI Assistant",
                desc: "Modular voice-controlled agent built using Python, local Ollama inference, and extensible automation handling mapped entirely without cloud dependencies.",
                tags: ["Python", "Ollama", "NLP"],
                github: "https://github.com/Lakshya9461",
                demo: "#",
                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
                color: "from-purple-500/10"
              }
            ].map((project, i) => (
              <RevealSection key={i} delay={i * 150} className="group h-full perspective-[1000px]">
                <div className={`flex flex-col h-full border rounded-3xl p-6 md:p-8 transition-all duration-700 hover:-translate-y-4 hover:rotate-1 hover:border-[#C3E41D]/50 relative overflow-hidden`} style={{ backgroundColor: isDarkMode ? '#030303' : 'white', borderColor: isDarkMode ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)' }}>
                  {/* Glowing Top Lip */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C3E41D]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Dynamic Unique Color Base */}
                  <div className={`absolute inset-0 bg-gradient-to-tl ${project.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                  {/* Premium Image Frame */}
                  <div className="w-full h-48 md:h-56 mb-8 rounded-2xl overflow-hidden relative border transition-all duration-700 z-10" style={{ backgroundColor: isDarkMode ? 'black' : '#f5f5f5', borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
                    <div className="absolute inset-0 bg-gradient-to-t z-10 opacity-90" style={{ backgroundImage: isDarkMode ? 'linear-gradient(to top, #030303, transparent, transparent)' : 'linear-gradient(to top, white, transparent, transparent)' }} />
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 group-hover:-rotate-2 transition-all duration-1000 ease-out" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-[#C3E41D] transition-colors z-10" style={{ fontFamily: 'Outfit, sans-serif', color: isDarkMode ? 'white' : '#171717' }}>{project.title}</h3>
                  <p className="text-base leading-relaxed font-light mb-8 flex-grow z-10" style={{ color: isDarkMode ? '#a3a3a3' : '#525252' }}>{project.desc}</p>
                  
                  <div className="flex gap-2 flex-wrap mb-10 z-10">
                    {project.tags.map(t => (
                      <span key={t} className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 backdrop-blur-md border rounded-md" style={{ backgroundColor: isDarkMode ? 'rgba(18,18,18,0.8)' : 'rgba(245,245,245,0.8)', borderColor: isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)', color: isDarkMode ? '#d4d4d4' : '#404040' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto relative z-10 w-full">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center flex-1 gap-2 py-3 active:scale-95 rounded-xl transition-all duration-300 text-sm font-semibold border transition-colors" style={{ backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', color: isDarkMode ? 'white' : '#171717', borderColor: isDarkMode ? 'transparent' : 'transparent' }}>
                      <Github size={18} /> Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center flex-1 gap-2 py-3 bg-[#C3E41D] hover:bg-[#d4f542] text-black active:scale-95 rounded-xl transition-all duration-300 text-sm font-bold shadow-[0_0_20px_rgba(195,228,29,0.15)] hover:shadow-[0_0_30px_rgba(195,228,29,0.3)]">
                      <ExternalLink size={18} /> Demo
                    </a>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </section>

        {/* Writing Section */}
        <section id="blog" className="py-32 lg:py-40 border-y relative z-10" style={{ backgroundColor: 'var(--section-bg)', borderColor: 'var(--section-border)' }}>
          <div className="px-6 md:px-12 max-w-7xl mx-auto space-y-16">
            <RevealSection className="text-center max-w-2xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6" style={{ fontFamily: 'Outfit, sans-serif', color: isDarkMode ? 'white' : '#171717' }}>Tech Writing</h2>
              <p className="text-lg lg:text-xl font-light leading-[1.8]" style={{ color: isDarkMode ? '#a3a3a3' : '#525252' }}>Deep dives, whitepapers, and operational documentation from my home server and continuous coding experiments.</p>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "I Ran 4 Operating Systems on a 4 GB Home Server",
                  preview: "An architectural breakdown of virtualization limits, lightweight containerization, and serious resource optimization over Debian Linux.",
                  link: "https://medium.com/@la9928609007/i-ran-4-operating-systems-on-a-4-gb-home-server-heres-what-actually-worked-ca3ce4a755ed"
                },
                {
                  title: "30 Days Replacing Windows with Linux",
                  preview: "A daily log exploring the friction, massive flexibility, and workflow hacks discovered while migrating my entire developer setup.",
                  link: "https://medium.com/@la9928609007/i-spent-30-days-replacing-windows-with-linux-heres-why-i-came-back-7e99bc81c8e7"
                }
              ].map((post, i) => (
                <RevealSection key={i} delay={i * 150} className="h-full">
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="block h-full group p-8 rounded-2xl border hover:-translate-y-2 transition-all duration-500 flex flex-col active:scale-[0.98] overflow-hidden relative" style={{ backgroundColor: isDarkMode ? 'rgba(195,228,29,0.05)' : 'rgba(195,228,29,0.08)', borderColor: isDarkMode ? 'rgba(195,228,29,0.2)' : 'rgba(195,228,29,0.25)' }}>
                    <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight mb-4 transition-colors duration-300" style={{ fontFamily: 'Outfit, sans-serif', color: isDarkMode ? 'white' : '#171717' }}>{post.title}</h3>
                    <p className="text-base font-light leading-[1.8] flex-grow mb-8" style={{ color: isDarkMode ? '#a3a3a3' : '#525252' }}>{post.preview}</p>
                    
                    <div className="flex items-center gap-2 text-sm font-black tracking-widest uppercase text-[#C3E41D] drop-shadow-sm mt-auto">
                      Read Article <ChevronRight size={18} className="transform group-hover:translate-x-3 transition-transform duration-300" />
                    </div>
                  </a>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 lg:py-40 px-6 md:px-12 max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <RevealSection>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border mb-8 hover:scale-110 hover:border-[#C3E41D]/30 hover:text-[#C3E41D] transition-all duration-500" style={{ backgroundColor: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)', borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', color: isDarkMode ? 'white' : '#171717' }}>
              <Mail size={36} strokeWidth={1.5} />
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6" style={{ fontFamily: 'Outfit, sans-serif', color: isDarkMode ? 'white' : '#171717' }}>Let's Build.</h2>
            <p className="text-lg md:text-xl font-light leading-[1.8] max-w-2xl mx-auto mb-16" style={{ color: isDarkMode ? '#a3a3a3' : '#525252' }}>
              I am currently open to collaborative opportunities. Send me a message if you want to deploy systems, scale projects, or just talk tech.
            </p>
            
            <form className="max-w-md mx-auto space-y-5 text-left backdrop-blur-md p-6 sm:p-8 rounded-3xl border shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]" onSubmit={(e) => e.preventDefault()} style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
              <div className="group">
                <label htmlFor="name" className="text-sm font-bold mb-2 block tracking-wide group-focus-within:text-[#C3E41D] transition-colors" style={{ color: isDarkMode ? '#a3a3a3' : '#525252' }}>Name</label>
                <input type="text" id="name" placeholder="John Doe" className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-[#C3E41D]/50 focus:border-[#C3E41D]/50 transition-all duration-300 shadow-inner" style={{ backgroundColor: isDarkMode ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.8)', borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', color: isDarkMode ? 'white' : '#171717' }} required />
              </div>
              <div className="group">
                <label htmlFor="email" className="text-sm font-bold mb-2 block tracking-wide group-focus-within:text-[#C3E41D] transition-colors" style={{ color: isDarkMode ? '#a3a3a3' : '#525252' }}>Email</label>
                <input type="email" id="email" placeholder="john@example.com" className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-[#C3E41D]/50 focus:border-[#C3E41D]/50 transition-all duration-300 shadow-inner" style={{ backgroundColor: isDarkMode ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.8)', borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', color: isDarkMode ? 'white' : '#171717' }} required />
              </div>
              <div className="group">
                <label htmlFor="message" className="text-sm font-bold mb-2 block tracking-wide group-focus-within:text-[#C3E41D] transition-colors" style={{ color: isDarkMode ? '#a3a3a3' : '#525252' }}>Message</label>
                <textarea id="message" rows={4} placeholder="How can we help each other?" className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-[#C3E41D]/50 focus:border-[#C3E41D]/50 transition-all duration-300 resize-none shadow-inner" style={{ backgroundColor: isDarkMode ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.8)', borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', color: isDarkMode ? 'white' : '#171717' }} required></textarea>
              </div>
              <button type="submit" className="group w-full px-8 py-5 mt-4 bg-white text-black font-black tracking-wide uppercase rounded-xl hover:bg-[#C3E41D] hover:scale-[1.03] hover:-translate-y-1 active:scale-95 active:translate-y-0 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_15px_30px_-10px_rgba(195,228,29,0.5)] flex items-center justify-center gap-2">
                Send Transmission <ChevronRight size={20} className="group-hover:translate-x-1 group-active:translate-x-3 transition-transform duration-300"/>
              </button>
            </form>

            <div className="flex items-center justify-center gap-8 mt-24 pt-12 border-t" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}>
              <a href="https://github.com/Lakshya9461" target="_blank" rel="noopener noreferrer" className="p-4 border rounded-full hover:text-[#C3E41D] hover:scale-110 hover:-translate-y-2 active:scale-95 active:translate-y-0 transition-all duration-300" style={{ backgroundColor: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)', borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', color: isDarkMode ? '#a3a3a3' : '#525252' }}>
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/lakshya70" target="_blank" rel="noopener noreferrer" className="p-4 border rounded-full hover:text-[#C3E41D] hover:scale-110 hover:-translate-y-2 active:scale-95 active:translate-y-0 transition-all duration-300" style={{ backgroundColor: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)', borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', color: isDarkMode ? '#a3a3a3' : '#525252' }}>
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-sm font-semibold tracking-wide mt-8" style={{ color: isDarkMode ? '#737373' : '#a3a3a3' }}>
              © {new Date().getFullYear()} Lakshya Agarwal. Engineered with Next.js & Tailwind.
            </p>
          </RevealSection>
        </section>
      </div>
    </main>
  );
}
