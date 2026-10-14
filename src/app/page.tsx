"use client";

import React, { useEffect, useState, useRef } from "react";
import PortfolioHero from "@/components/ui/portfolio-hero";
import { PageRibbon } from "@/components/ui/page-ribbon";
import { 
  SiPython, 
  SiPytorch, 
  SiDocker, 
  SiLinux, 
  SiNginx, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiPostgresql 
} from "react-icons/si";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Terminal, 
  ChevronsDown, 
  Brain,
  Cpu,
  Server,
  FileText,
  MapPin,
  Globe,
  Sun,
  Moon
} from "lucide-react";

// Scroll reveal hook with zero layout shift
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
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
className={`transition-all duration-700 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
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
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(!window.matchMedia('(prefers-color-scheme: light)').matches);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Contact form state
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Server error");
      setFormStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setFormStatus("error");
    }
  };

  // Page-turn slideshow: mark the page nearest the viewport as "in view"
  // so it un-shifts from the gutter (translateX -> 0). Pure DOM class
  // toggling — no state, stays compiler-safe.
  useEffect(() => {
    const pages = document.querySelectorAll<HTMLElement>("[data-page]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.target.classList.toggle("in-view", entry.isIntersecting)
        );
      },
      { rootMargin: "0px 0px -30% 0px", threshold: 0 }
    );
    pages.forEach((page) => observer.observe(page));
    return () => observer.disconnect();
  }, []);

  const techArsenal = [
    { node: <SiPython size={44} className="text-[#ff2a5f]" />, title: "Python", slot: "01", tag: "AI/CORE" },
    { node: <SiPytorch size={44} className="text-[#ff2a5f]" />, title: "PyTorch", slot: "02", tag: "TENSORS" },
    { node: <SiDocker size={44} className={isDarkMode ? "text-white" : "text-black"} />, title: "Docker", slot: "03", tag: "CONTAINERS" },
    { node: <SiLinux size={44} className={isDarkMode ? "text-white" : "text-black"} />, title: "Linux", slot: "04", tag: "KERNEL/DEBIAN" },
    { node: <SiNginx size={44} className="text-[#ff2a5f]" />, title: "Nginx", slot: "05", tag: "GATEWAY" },
    { node: <SiNextdotjs size={44} className={isDarkMode ? "text-white" : "text-black"} />, title: "Next.js", slot: "06", tag: "FRONTEND" },
    { node: <SiReact size={44} className={isDarkMode ? "text-white" : "text-black"} />, title: "React", slot: "07", tag: "CLIENT" },
    { node: <SiTypescript size={44} className={isDarkMode ? "text-white" : "text-black"} />, title: "TypeScript", slot: "08", tag: "TYPED" },
    { node: <SiTailwindcss size={44} className="text-[#ff2a5f]" />, title: "Tailwind CSS", slot: "09", tag: "STYLING" },
    { node: <SiPostgresql size={44} className="text-[#ff2a5f]" />, title: "SQL & DBs", slot: "10", tag: "STORAGE" },
  ];

  return (
    <main 
      className="relative min-h-screen selection:bg-[#ff2a5f] selection:text-white overflow-hidden" 
      style={{ 
        backgroundColor: 'var(--background)', 
        color: 'var(--foreground)'
      }}
    >
      {/* Background Halftone Screentone Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none manga-halftone-subtle opacity-60" />

      {/* Manga Reader Page Ribbon */}
      <PageRibbon />

      <div className="relative z-10">
        
        {/* Sticky Manga Issue Header (Navbar) */}
        <header 
          className="fixed top-0 left-0 right-0 z-50 border-b-[3px] border-black dark:border-white backdrop-blur-xl"
          style={{ backgroundColor: 'var(--nav-bg)' }}
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
            {/* Manga Title Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="manga-hanko px-2 py-0.5 text-xs font-black">極</span>
              <div className="flex flex-col">
                <span 
                  className="font-display text-xl tracking-tighter uppercase leading-none group-hover:text-[#ff2a5f] transition-colors"
                >
                  LAKSHYA
                </span>
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase opacity-60">
                  VOL. 2026 // 開発録
                </span>
              </div>
            </div>

            {/* Inked Navigation Links */}
            <ul className="hidden md:flex items-center gap-8 text-xs font-bold tracking-[0.2em] uppercase">
              <li>
                <a href="#about" className="hover:text-[#ff2a5f] transition-colors flex items-center gap-1">
                  <span className="text-[#ff2a5f]">01.</span> PROFILE
                </a>
              </li>
              <li>
                <a href="#tech" className="hover:text-[#ff2a5f] transition-colors flex items-center gap-1">
                  <span className="text-[#ff2a5f]">02.</span> ARSENAL
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#ff2a5f] transition-colors flex items-center gap-1">
                  <span className="text-[#ff2a5f]">03.</span> TIMELINE
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#ff2a5f] transition-colors flex items-center gap-1">
                  <span className="text-[#ff2a5f]">04.</span> WORKS
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-[#ff2a5f] transition-colors flex items-center gap-1">
                  <span className="text-[#ff2a5f]">05.</span> SCROLLS
                </a>
              </li>
            </ul>

            {/* Actions Bar */}
            <div className="flex items-center gap-3">
              {/* CV Action Button */}
              <a 
                href="/api/cv/pdf" 
                className="hidden sm:inline-flex items-center gap-1.5 manga-box px-3.5 py-1.5 text-xs font-black tracking-wider uppercase bg-white text-black dark:bg-[#111114] dark:text-white"
              >
                <FileText size={13} />
                <span>DOSSIER</span>
              </a>

              {/* Ink / Paper Tone Toggle */}
              <button 
                onClick={toggleTheme} 
                className="manga-box p-2 bg-white text-black dark:bg-[#111114] dark:text-white active:translate-x-1 active:translate-y-1 active:shadow-none"
                aria-label="Toggle Manga Tone (Ink / Paper)"
                title="Toggle Manga Tone"
              >
                {isDarkMode ? (
                  <Sun size={18} className="text-[#ff2a5f]" />
                ) : (
                  <Moon size={18} className="text-black" />
                )}
              </button>

              {/* Inked Call To Action */}
              <a 
                href="#contact" 
                className="manga-box-red px-4 sm:px-5 py-2 text-xs font-black uppercase tracking-wider bg-[#ff2a5f] text-white active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center gap-1"
              >
                <span>CONTACT</span>
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Section (Manga Cover Splash Page) */}
        <section data-page="cover" className="manga-page in-view relative min-h-screen flex flex-col justify-center pt-20">
          <PortfolioHero />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none">
            <a 
              href="#about" 
              className="pointer-events-auto manga-box px-2.5 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] tracking-widest font-black uppercase flex items-center gap-1"
            >
              <span>SCROLL DOWN // 頁をめくる</span>
              <ChevronsDown size={14} />
            </a>
          </div>
        </section>

        {/* Manga Chapter Divider 01 */}
        <div className="manga-chapter">
          <span className="manga-chapter-mark">◆</span>
          <span className="manga-chapter-label">CHAPTER 01 // 能力値</span>
          <span className="manga-chapter-title">CHARACTER FILE & PROFILE</span>
          <span className="manga-chapter-meta hidden sm:inline">MIMIC-IV ICU PILOT</span>
        </div>

        {/* Accent Highlight Rule */}
        <div className="h-px w-full bg-[#ff2a5f] opacity-30" />

        {/* About Section: Character Sheet & Core Stats */}
        <section id="about" data-page="profile" className="manga-page py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative Panel */}
            <RevealSection className="lg:col-span-6 space-y-8">
              <h2 
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase"
              >
                RESEARCHER.<br/>
                <span className="text-[#ff2a5f]">ENGINEER.</span><br/>
                SYSTEM BUILDER.
              </h2>

              <div className="space-y-6 text-base sm:text-lg leading-relaxed font-normal">
                {/* Comic Speech / Narrative Quote Panel */}
                <div className="manga-box p-6 bg-white dark:bg-[#111114] relative">
                  <div className="absolute -top-3 left-6 px-2 bg-black text-white dark:bg-white dark:text-black font-mono text-[10px] font-black uppercase border border-black dark:border-white">
                    MISSION LOG // 活動理念
                  </div>
                  <p className="font-normal">
                    I am a Computer Science undergraduate at <strong className="font-black text-[#ff2a5f]">JK Lakshmipat University</strong> building privacy-first desktop applications, local-first mobile apps, security tooling, and clinical ML pipelines. My work spans Electron browsers with renderer isolation, C++20 DNS security agents, Flutter finance trackers with 159 tests, and MIMIC-IV ICU early-sepsis prediction with XGBoost (AUROC 0.7935).
                  </p>
                </div>

                <p className="opacity-90">
                  My engineering philosophy: ship tested, offline-capable software that respects user privacy. Languages: Python, JavaScript, C++, Dart, SQL. Certified: <code className="font-mono text-sm px-1.5 py-0.5 bg-neutral-200 dark:bg-neutral-800 font-bold border border-current">CITI Program</code> — Data or Specimens Only Research (Score 97).
                </p>
              </div>

              {/* Inked Details Grid */}
              <div className="grid grid-cols-1 gap-3 pt-2">
                <div className="manga-box col-span-2 p-3 bg-white dark:bg-[#111114]">
                  <span className="tankobon-label opacity-60 block text-[10px]">AFFILIATION // 所属</span>
                  <span className="font-black text-sm">JKLU • JAIPUR</span>
                </div>
              </div>
            </RevealSection>
            
            {/* Right Capability Panels (Manga Stat Cards) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { 
                  slot: "01",
                  title: 'AI & Clinical ML', 
                  kanji: '医療機械学習',
                  desc: 'MIMIC-IV ICU Sepsis-3 temporal pipelines, LSTM sequence modeling (AUROC 0.779), and GroupKFold cross-validation.',
                  icon: <Brain size={24} className="text-[#ff2a5f]" /> 
                },
                { 
                  slot: "02",
                  title: 'Local LLM & Agents', 
                  kanji: '自律型エージェント',
                  desc: 'Dedicated RTX 4070 model server with Ollama, Nginx reverse proxy, and isolated WSL2 Hermes Agent profiles.',
                  icon: <Cpu size={24} className="text-[#ff2a5f]" /> 
                },
                { 
                  slot: "03",
                  title: 'Linux & Systems', 
                  kanji: '基盤設計',
                  desc: 'Debian/Ubuntu production workflows, zero public ports via Cloudflare Tunnels, Tailscale zero-trust, and network isolation.',
                  icon: <Terminal size={24} className="text-[#ff2a5f]" /> 
                },
                { 
                  slot: "04",
                  title: 'Docker & Homelab', 
                  kanji: '自作環境',
                  desc: 'Self-hosted media, storage, automated Git/Docker Compose deployment pipelines, and persistent service stacks.',
                  icon: <Server size={24} className="text-[#ff2a5f]" /> 
                },
              ].map((skill, i) => (
                <RevealSection key={i} className="h-full">
                  <div className="manga-box p-6 bg-white dark:bg-[#111114] h-full flex flex-col justify-between group relative overflow-hidden">
                    {/* Corner Screentone Accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 manga-halftone opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    <div>
                      <div className="flex items-center mb-4">
                        <div className="p-3 border-2 border-black dark:border-white bg-black/5 dark:bg-white/5">
                          {skill.icon}
                        </div>
                      </div>

                      <h3 
                        className="font-display text-lg tracking-tight uppercase mb-1"
                      >
                        {skill.title}
                      </h3>
                      <span className="tankobon-label opacity-60 text-[10px] block mb-3">
                        「 {skill.kanji} 」
                      </span>

                      <p className="text-sm leading-relaxed opacity-85 font-normal">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>

          </div>
        </section>

        {/* Manga Chapter Divider 02 */}
        <div className="manga-chapter">
          <span className="manga-chapter-mark">◆</span>
          <span className="manga-chapter-label">CHAPTER 02 // 装備</span>
          <span className="manga-chapter-title">THE ARSENAL (TECH STACK)</span>
          <span className="manga-chapter-meta hidden sm:inline">10 TOOLS, ZERO BLOAT</span>
        </div>

        {/* Accent Highlight Rule */}
        <div className="h-px w-full bg-[#ff2a5f] opacity-30" />

        {/* Tech Arsenal Section */}
        <section id="tech" data-page="arsenal" className="manga-page py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-16 relative z-10">
          <RevealSection className="max-w-3xl space-y-5">
            <h2 
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase"
            >
              THE ARSENAL
            </h2>
            <p className="text-base sm:text-lg opacity-85 max-w-2xl leading-relaxed">
              Battle-tested tools, frameworks, and low-overhead runtimes powering reproducible AI models and resilient infrastructure.
            </p>
          </RevealSection>

          <RevealSection delay={80} className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
              {techArsenal.map((tech) => (
                <div
                  key={tech.title}
                  className="manga-box p-6 bg-white dark:bg-[#111114] flex flex-col items-center justify-between text-center relative group min-h-[160px]"
                >
                  {/* Manga Slot Header */}
                  <div className="w-full flex items-center justify-between font-mono text-[10px] font-bold opacity-60 mb-3">
                    <span>#{tech.slot}</span>
                    <span className="text-[#ff2a5f]">{tech.tag}</span>
                  </div>

                  <div className="my-auto transform group-hover:scale-110 transition-transform duration-200">
                    {tech.node}
                  </div>

                  <span 
                    className="mt-4 text-sm font-black tracking-wide uppercase"
                  >
                    {tech.title}
                  </span>
                </div>
              ))}
            </div>
          </RevealSection>
        </section>

        {/* Manga Chapter Divider 03 */}
        <div className="manga-chapter">
          <span className="manga-chapter-mark">◆</span>
          <span className="manga-chapter-label">CHAPTER 03 // 記録</span>
          <span className="manga-chapter-title">CHRONICLES & TIMELINE</span>
          <span className="manga-chapter-meta hidden sm:inline">IN TRAINING, IN PRINT</span>
        </div>

        {/* Accent Highlight Rule */}
        <div className="h-px w-full bg-[#ff2a5f] opacity-30" />

        {/* Experience & Timeline Section */}
        <section id="experience" data-page="chronicle" className="manga-page py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Header Panel */}
            <RevealSection className="lg:col-span-4 space-y-6">
              <h2 
                className="font-display text-4xl sm:text-5xl font-black tracking-tight uppercase"
              >
                THE CHRONICLES
              </h2>
              
              <p className="text-base opacity-85 leading-relaxed">
                Documented appointments, clinical milestones, and academic track records that prove capability in the field.
              </p>

              <div className="manga-box p-4 bg-white dark:bg-[#111114] space-y-2 hidden lg:block">
                <span className="tankobon-label text-[10px] text-[#ff2a5f] block">
                  VERIFICATION SEAL // 保証
                </span>
                <p className="text-xs opacity-75 leading-relaxed">
                  All research and writing items verified against institutional guidelines & public peer tutorials.
                </p>
              </div>
            </RevealSection>

            {/* Right Timeline Panels */}
            <div className="lg:col-span-8 space-y-6 border-l-[3px] border-black dark:border-white pl-6 sm:pl-8 ml-2 sm:ml-4">
              {[
                {
                  chapter: "LOG 01",
                  role: "Undergraduate Research Intern — Early Sepsis Prediction",
                  company: "MIMIC-IV | Supervised by Dr. Amit Sinhal, JKLU",
                  date: "MAY 2026 — AUG 2026",
                  kanji: "敗血症予測研究",
                  desc: "Built an end-to-end ML pipeline for 6-hour-horizon Sepsis-3 prediction on MIMIC-IV ICU data: suspected-infection identification, patient/admission/ICU preprocessing, and temporal feature engineering. Benchmarked five approaches (XGBoost, Random Forest, LSTM, Logistic Regression, qSOFA) on identical windows with 5-fold GroupKFold splits by patient to prevent leakage. XGBoost led at AUROC 0.7935 / AUPRC 0.0275 at 0.60% window prevalence; applied SHAP for interpretability. External validation on eICU underway."
                },
                {
                  chapter: "LOG 02",
                  role: "Freelance Tech & AI Writer",
                  company: "Medium",
                  date: "FEB 2026 — PRESENT",
                  kanji: "技術執筆",
                  desc: "Publishing detailed tutorials and architectural deep-dives on Linux virtualization, lightweight homelab containers, and local AI workflows. Notable pieces include 'I Ran 4 Operating Systems on a 4 GB Home Server' and '30 Days Replacing Windows with Linux'."
                },
                {
                  chapter: "LOG 03",
                  role: "B.Tech in Computer Science",
                  company: "JK Lakshmipat University — Jaipur, India",
                  date: "AUG 2024 — MAY 2028",
                  kanji: "学士課程",
                  desc: "Selected for the R-CAT Quiz-A-Thon programme. Relevant coursework: Machine Learning, Data Structures & Algorithms, Computer Networks, Database Management Systems, Cloud Computing, and System Design."
                }
              ].map((exp, i) => (
                <RevealSection key={i} className="relative">
                  {/* Timeline Pin Node */}
                  <div className="absolute -left-[35px] sm:-left-[43px] top-4 w-4 h-4 rounded-none bg-[#ff2a5f] border-2 border-black dark:border-white z-10" />

                  <div className="manga-box p-6 bg-white dark:bg-[#111114] space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 dark:border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-black text-[#ff2a5f]">
                          [{exp.chapter}]
                        </span>
                        <span className="manga-box px-2 py-0.5 bg-black text-white dark:bg-white dark:text-black font-mono text-[10px] font-black tracking-widest">
                          {exp.date}
                        </span>
                      </div>
                      <span className="tankobon-label text-[10px] opacity-60">
                        「 {exp.kanji} 」
                      </span>
                    </div>

                    <div>
                      <h3 
                        className="text-xl sm:text-2xl font-black tracking-tight uppercase"
                      >
                        {exp.role}
                      </h3>
                      <span className="text-sm font-bold text-[#ff2a5f]">
                        {exp.company}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base leading-relaxed opacity-85 font-normal">
                      {exp.desc}
                    </p>
                  </div>
                </RevealSection>
              ))}
            </div>

          </div>
        </section>

        {/* Manga Chapter Divider 04 */}
        <div className="manga-chapter">
          <span className="manga-chapter-mark">◆</span>
          <span className="manga-chapter-label">CHAPTER 04 // 傑作選</span>
          <span className="manga-chapter-title">THE MASTERWORKS (FEATURED)</span>
          <span className="manga-chapter-meta hidden sm:inline">5 VOLUMES ON THE SHELF</span>
        </div>

        {/* Accent Highlight Rule */}
        <div className="h-px w-full bg-[#ff2a5f] opacity-30" />

        {/* Projects Showcase (Manga Volume Covers) */}
        <section id="projects" data-page="works" className="manga-page py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-16 relative z-10">
          <RevealSection className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <h2 
                className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase"
              >
                SELECT VOLUMES
              </h2>
              <p className="text-base sm:text-lg opacity-85 max-w-xl leading-relaxed">
                Systems, machine learning architectures, and applications crafted with production rigor.
              </p>
            </div>

            <a 
              href="https://github.com/Lakshya9461" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="manga-box px-6 py-3 bg-white text-black dark:bg-[#111114] dark:text-white inline-flex items-center gap-2 self-start md:self-auto"
            >
              <span className="tankobon-label">GITHUB ARCHIVE</span>
              <ExternalLink size={15} />
            </a>
          </RevealSection>

          {/* Projects Manga Panel Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                vol: "VOL. 01",
                kanji: "敗血症予測",
                title: "Clinical Early Sepsis Prediction",
                desc: "End-to-end ML pipeline for 6-hour-horizon Sepsis-3 prediction on MIMIC-IV ICU data. Benchmarked XGBoost, Random Forest, LSTM, Logistic Regression, and qSOFA with strict 5-fold GroupKFold patient-level splits. XGBoost led at AUROC 0.7935 / AUPRC 0.0275; SHAP used for interpretability.",
                tags: ["PyTorch", "XGBoost", "MIMIC-IV", "SHAP", "Clinical ML"],
                github: "https://github.com/Lakshya9461",
                demo: "https://github.com/Lakshya9461",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
              },
              {
                vol: "VOL. 02",
                kanji: "電脳盾型閲覧器",
                title: "Aegis Privacy Browser",
                desc: "Privacy-focused Electron browser with renderer isolation via preload bridge, nodeIntegration disabled across all windows. Features ~1,400 ad-block/anti-fingerprinting filters across 3 aggressiveness levels, download manager, tab suspension, incognito sessions, and a 13-test Node.js built-in suite guarding a false-positive URL corpus.",
                tags: ["Electron", "Chromium", "JavaScript", "Security"],
                github: "https://github.com/Lakshya9461/Aegis-Browser",
                demo: "https://github.com/Lakshya9461/Aegis-Browser",
                image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
              },
              {
                vol: "VOL. 03",
                kanji: "番犬DNS",
                title: "SentinelDNS",
                desc: "Local-first DNS security agent co-built in C++20. Core handles wire encode/decode, TTL-bound cache, policy matching, UDP listener/resolver, and a telemetry sink. Policy is a reviewed, git-tracked file with no API write path; diagnostics exposed via a read-only NDJSON IPC API.",
                tags: ["C++20", "Unix Sockets", "NDJSON", "DNS", "Security"],
                github: "https://github.com/Lakshya9461",
                demo: "https://github.com/Lakshya9461",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
              },
              {
                vol: "VOL. 04",
                kanji: "自作電脳要塞",
                title: "Self-Hosted Homelab Server",
                desc: "Self-hosted media, file-sharing, and utility stack on Debian Linux. Automated Docker Compose/Git CI pipelines, zero exposed public ports secured strictly via Cloudflare Tunnels and Tailscale zero-trust mesh.",
                tags: ["Debian", "Docker", "Tailscale", "Cloudflare", "Linux"],
                github: "https://github.com/Lakshya9461",
                demo: "https://github.com/Lakshya9461",
                image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
              },
              {
                vol: "VOL. 05",
                kanji: "帳簿魔杖",
                title: "CashWand Finance Tracker",
                desc: "Offline-first Flutter finance tracker with SQLite persistence, overall and category budgets with real-time over-budget warnings, and biometric app lock (fingerprint, Face Unlock, PIN). Ships with 159 tests across entities, repositories, and providers, plus a manual UAT plan.",
                tags: ["Flutter", "Dart", "SQLite", "Biometric", "Local-First"],
                github: "https://github.com/Lakshya9461/Cashwand",
                demo: "https://github.com/Lakshya9461/Cashwand",
                image: "/cashwand.png",
              }
            ].map((project, i) => (
              <RevealSection key={i} className="h-full">
                <div className="manga-box bg-white dark:bg-[#111114] h-full flex flex-col justify-between p-5 sm:p-6 group relative overflow-hidden">
                  
                  {/* Top Comic Volume Header */}
                  <div className="flex items-center justify-between mb-4 border-b border-black/10 dark:border-white/10 pb-3">
                    <span className="manga-box px-2 py-0.5 bg-black text-white dark:bg-white dark:text-black font-mono text-[10px] font-black uppercase">
                      {project.vol}
                    </span>
                    <span className="tankobon-label text-[10px] text-[#ff2a5f]">
                      「 {project.kanji} 」
                    </span>
                  </div>

                  {/* Manga Inked Illustration Frame */}
                  <div className="w-full h-44 sm:h-48 mb-6 border-2 border-black dark:border-white overflow-hidden relative bg-black">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500 ease-out" 
                    />
                    {/* Comic Screentone Glare Overlay */}
                    <div className="absolute inset-0 manga-halftone opacity-30 pointer-events-none group-hover:opacity-10 transition-opacity" />
                  </div>

                  {/* Body Info */}
                  <div className="flex-grow space-y-3">
                    <h3 
                      className="text-xl font-black tracking-tight uppercase group-hover:text-[#ff2a5f] transition-colors"
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-85 font-normal">
                      {project.desc}
                    </p>
                  </div>

                  {/* Manga Tags */}
                  <div className="flex flex-wrap gap-1.5 my-6">
                    {project.tags.map((t) => (
                      <span 
                        key={t}
                        className="tankobon-label text-[10px] border border-black dark:border-white px-2 py-0.5 bg-neutral-100 dark:bg-neutral-900"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-black/10 dark:border-white/10">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="manga-box py-2 text-center bg-white text-black dark:bg-[#111114] dark:text-white flex items-center justify-center gap-1.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                    >
                      <Github size={14} />
                      <span className="tankobon-label text-[10px]">CODE</span>
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="manga-box-red py-2 text-center bg-[#ff2a5f] text-white flex items-center justify-center gap-1.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                    >
                      <ExternalLink size={14} />
                      <span className="tankobon-label text-[10px]">INSPECT</span>
                    </a>
                  </div>

                </div>
              </RevealSection>
            ))}
          </div>
        </section>

        {/* Manga Chapter Divider 05 */}
        <div className="manga-chapter">
          <span className="manga-chapter-mark">◆</span>
          <span className="manga-chapter-label">CHAPTER 05 // 巻物</span>
          <span className="manga-chapter-title">DISPATCHES & FIELD NOTES</span>
          <span className="manga-chapter-meta hidden sm:inline">PUBLIC FIELD NOTES</span>
        </div>

        {/* Accent Highlight Rule */}
        <div className="h-px w-full bg-[#ff2a5f] opacity-30" />

        {/* Writing Section */}
        <section id="blog" data-page="scrolls" className="manga-page py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-16 relative z-10">
          <RevealSection className="max-w-2xl space-y-5">
            <h2 
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase"
            >
              TECH WRITING
            </h2>
            <p className="text-base sm:text-lg opacity-85 leading-relaxed">
              Operational logs, homelab benchmarks, and architectural tutorials published on Medium.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "I Ran 4 Operating Systems on a 4 GB Home Server",
                preview: "An architectural breakdown of virtualization limits, lightweight containerization, and serious resource optimization over Debian Linux.",
                link: "https://medium.com/@la9928609007/i-ran-4-operating-systems-on-a-4-gb-home-server-heres-what-actually-worked-ca3ce4a755ed",
                tag: "DEBIAN // 4GB RAM"
              },
              {
                title: "30 Days Replacing Windows with Linux",
                preview: "A daily log exploring the friction, massive flexibility, and workflow hacks discovered while migrating my entire developer setup.",
                link: "https://medium.com/@la9928609007/i-spent-30-days-replacing-windows-with-linux-heres-why-i-came-back-7e99bc81c8e7",
                tag: "OS MIGRATION // 30 DAYS"
              }
            ].map((post, i) => (
              <RevealSection key={i} className="h-full">
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="manga-box block h-full p-6 sm:p-8 bg-white dark:bg-[#111114] flex flex-col justify-between group active:translate-x-1 active:translate-y-1 active:shadow-none"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-3">
                      <span className="tankobon-label text-[10px] text-[#ff2a5f]">
                        {post.tag}
                      </span>
                      <span className="tankobon-label text-[10px] opacity-60">
                        MEDIUM.COM
                      </span>
                    </div>

                    <h3 
                      className="text-xl sm:text-2xl font-black tracking-tight uppercase leading-snug group-hover:text-[#ff2a5f] transition-colors"
                    >
                      {post.title}
                    </h3>

                    <p className="text-sm sm:text-base leading-relaxed opacity-85 font-normal">
                      {post.preview}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-black/10 dark:border-white/10 tankobon-label text-xs text-[#ff2a5f]">
                    <span>READ PUBLICATION</span>
                  </div>
                </a>
              </RevealSection>
            ))}
          </div>
        </section>

        {/* Manga Chapter Divider 06 */}
        <div className="manga-chapter">
          <span className="manga-chapter-mark">◆</span>
          <span className="manga-chapter-label">FINAL CHAPTER // 終話</span>
          <span className="manga-chapter-title">TRANSMISSION & CONTACT</span>
          <span className="manga-chapter-meta hidden sm:inline">CHANNEL OPEN</span>
        </div>

        {/* Accent Highlight Rule */}
        <div className="h-px w-full bg-[#ff2a5f] opacity-30" />

        {/* Contact Section (Manga Transmission Panel) */}
        <section id="contact" data-page="transmission" className="manga-page py-24 px-4 sm:px-6 md:px-12 max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <RevealSection className="space-y-6">
            <div className="manga-hanko px-3 py-1 text-sm font-black inline-flex">
              通信極秘 // TRANSMIT
            </div>

            <h2 
              className="font-display text-4xl sm:text-6xl font-black tracking-tight uppercase"
            >
              LET'S BUILD.
            </h2>
            
            <p className="text-base sm:text-lg opacity-85 max-w-2xl mx-auto leading-relaxed">
              Open to AI/ML research collaborations, systems engineering roles, and resilient infrastructure setups. Reach out directly or dispatch a transmission.
            </p>
            
            {/* Manga Metadata Contacts */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 font-mono text-xs font-black uppercase">
              <span className="manga-box px-3 py-1.5 bg-white text-black dark:bg-[#111114] dark:text-white flex items-center gap-1.5">
                <MapPin size={14} className="text-[#ff2a5f]" /> JAIPUR, INDIA
              </span>
              <a 
                href="mailto:la9928609007@gmail.com" 
                className="manga-box px-3 py-1.5 bg-white text-black dark:bg-[#111114] dark:text-white flex items-center gap-1.5 hover:text-[#ff2a5f] transition-colors"
              >
                <Mail size={14} className="text-[#ff2a5f]" /> la9928609007@gmail.com
              </a>
              <a 
                href="https://lakshya9461.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="manga-box px-3 py-1.5 bg-white text-black dark:bg-[#111114] dark:text-white flex items-center gap-1.5 hover:text-[#ff2a5f] transition-colors"
              >
                <Globe size={14} className="text-[#ff2a5f]" /> lakshya9461.in
              </a>
            </div>

            {/* Inked Comic Form */}
            <form 
              className="max-w-md mx-auto space-y-4 text-left manga-box p-6 sm:p-8 bg-white dark:bg-[#111114] mt-8"
              onSubmit={handleContact}
            >
              {formStatus === "sent" && (
                <div className="manga-box p-3 bg-[#ff2a5f]/10 border-[#ff2a5f] text-[#ff2a5f] font-mono text-xs font-black uppercase tracking-wider text-center">
                  ✓ TRANSMISSION RECEIVED // メッセージ受信完了
                </div>
              )}
              {formStatus === "error" && (
                <div className="manga-box p-3 font-mono text-xs font-black uppercase tracking-wider text-center opacity-70">
                  ✗ TRANSMISSION FAILED — TRY AGAIN
                </div>
              )}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-mono font-black uppercase tracking-wider block">
                  NAME // 氏名
                </label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="AGENT NAME" 
                  value={formData.name}
                  onChange={(e) => setFormData(d => ({ ...d, name: e.target.value }))}
                  className="w-full border-2 border-black dark:border-white px-4 py-3 bg-neutral-50 dark:bg-neutral-900 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#ff2a5f]" 
                  required 
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-mono font-black uppercase tracking-wider block">
                  EMAIL // 連絡先
                </label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="agent@example.com" 
                  value={formData.email}
                  onChange={(e) => setFormData(d => ({ ...d, email: e.target.value }))}
                  className="w-full border-2 border-black dark:border-white px-4 py-3 bg-neutral-50 dark:bg-neutral-900 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#ff2a5f]" 
                  required 
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono font-black uppercase tracking-wider block">
                  MESSAGE // 伝言
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  placeholder="State project scope, research question, or system requirements..." 
                  value={formData.message}
                  onChange={(e) => setFormData(d => ({ ...d, message: e.target.value }))}
                  className="w-full border-2 border-black dark:border-white px-4 py-3 bg-neutral-50 dark:bg-neutral-900 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#ff2a5f] resize-none" 
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={formStatus === "sending" || formStatus === "sent"}
                className="manga-box-red w-full py-4 bg-[#ff2a5f] text-white active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 mt-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:translate-x-0 disabled:active:translate-y-0"
              >
                <span className="tankobon-label">
                  {formStatus === "sending" ? "TRANSMITTING…" : formStatus === "sent" ? "SENT ✓" : "SEND TRANSMISSION // 送信"}
                </span>
              </button>
            </form>

            {/* Footer Inked Seal & Social Links */}
            <div className="pt-16 border-t-[2px] border-black/20 dark:border-white/20 flex flex-col items-center gap-6">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a 
                  href="https://github.com/Lakshya9461" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="manga-box p-3 bg-white text-black dark:bg-[#111114] dark:text-white hover:text-[#ff2a5f] active:translate-x-0.5 active:translate-y-0.5" 
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/lakshya70" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="manga-box p-3 bg-white text-black dark:bg-[#111114] dark:text-white hover:text-[#ff2a5f] active:translate-x-0.5 active:translate-y-0.5" 
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="/api/cv/pdf" 
                  className="manga-box px-5 py-3 bg-white text-black dark:bg-[#111114] dark:text-white hover:text-[#ff2a5f] font-mono text-xs font-black uppercase tracking-widest flex items-center gap-2 active:translate-x-0.5 active:translate-y-0.5"
                >
                  <FileText size={16} />
                  <span>DOWNLOAD CV (PDF)</span>
                </a>
                <a 
                  href="/api/cv/docx" 
                  className="manga-box px-5 py-3 bg-white text-black dark:bg-[#111114] dark:text-white hover:text-[#ff2a5f] font-mono text-xs font-black uppercase tracking-widest flex items-center gap-2 active:translate-x-0.5 active:translate-y-0.5"
                >
                  <FileText size={16} />
                  <span>DOWNLOAD CV (WORD)</span>
                </a>
              </div>

              <div className="text-center font-mono text-xs opacity-70 space-y-1">
                <p>
                  © {new Date().getFullYear()} LAKSHYA AGARWAL. INKED MANGA PANEL EDITION.
                </p>
                <p className="text-[10px] tracking-widest">
                  ENGINEERED WITH NEXT.JS 16 • TAILWIND CSS • ZERO DEPENDENCIES
                </p>
              </div>
            </div>
          </RevealSection>
        </section>

      </div>
    </main>
  );
}
