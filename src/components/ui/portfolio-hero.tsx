"use client";

import React, { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const roles = [
  { en: "FULL-STACK ENGINEER", jp: "フルスタック技師" },
  { en: "SYSTEMS BUILDER", jp: "システム構築士" },
  { en: "LINUX ENGINEER", jp: "リナックス設計士" },
  { en: "CLOUD ARCHITECT", jp: "クラウド建築士" },
];

export default function PortfolioHero() {
  const [mounted, setMounted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      setIsDarkMode(savedTheme ? savedTheme === 'dark' : !window.matchMedia('(prefers-color-scheme: light)').matches);
    };
    checkTheme();
    setMounted(true);
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setFade(true);
      }, 400);
    }, 3600);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div 
      className="relative w-full min-h-[95vh] flex flex-col items-center justify-center overflow-hidden border-b-[3px] border-black dark:border-white select-none"
      style={{ 
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)'
      }}
    >
      {/* 1. Manga Screentone Halftone Dot Texture Background */}
      <div className="absolute inset-0 manga-halftone-subtle opacity-70 pointer-events-none" />
      
      {/* 2. Manga Speed Hatching Angle Accents in Top-Right & Bottom-Left */}
      <div className="absolute -top-12 -right-12 w-80 h-80 manga-speed-hatch opacity-30 pointer-events-none rounded-full" />
      <div className="absolute -bottom-12 -left-12 w-80 h-80 manga-speed-hatch opacity-30 pointer-events-none rounded-full" />

      {/* 2.5. Subtle Depth Gradient Overlay (dark-to-transparent from bottom) */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--background), transparent)" }}
      />

      {/* 3. Manga Registration Marks / Crop Tonbo (トンボ) in Corners */}
      <div className="absolute top-6 left-6 pointer-events-none hidden sm:flex items-center gap-1 tankobon-label opacity-40">
        <span className="inline-block w-4 h-[1.5px] bg-current" />
        <span>SEC: 01 // CROP.T</span>
      </div>
      <div className="absolute top-6 right-6 pointer-events-none hidden sm:flex items-center gap-1 tankobon-label opacity-40">
        <span>VOL. 2026</span>
        <span className="inline-block w-4 h-[1.5px] bg-current" />
      </div>

      {/* Content Panel Frame */}
      <div className={`relative z-20 flex flex-col items-center text-center max-w-5xl px-4 sm:px-6 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Manga Volume / Issue Header Banner */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <div className="manga-box px-3 py-1 bg-black text-white dark:bg-white dark:text-black tankobon-label flex items-center gap-2">
            <span>ACT I: THE ORIGIN // 序章</span>
          </div>

          <span className="manga-hanko px-2.5 py-0.5 text-xs font-black bg-transparent">
            極
          </span>
        </div>

        {/* Title - Inked Manga Cover Style */}
        <div className="relative mb-6">
          <div className="tankobon-label text-[#ff2a5f] mb-2 flex items-center justify-center gap-2">
            <span>「</span>
            <span>FULL-STACK ENGINEER & SYSTEMS ARCHITECT</span>
            <span>」</span>
          </div>

          <h1 
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none uppercase font-black"
            style={{ 
              letterSpacing: "-0.04em",
              textShadow: isDarkMode ? "4px 4px 0px #27272a" : "4px 4px 0px #d4d4d8"
            }}
          >
            LAKSHYA
          </h1>

          <div className="tankobon-label opacity-60 mt-1">
            AGARWAL • 開発者・研究録
          </div>
        </div>

        {/* Manga Dialogue / Specialization Box */}
        <div className="mb-10 w-full max-w-xl">
          <div className="manga-box bg-white dark:bg-[#111114] p-4 sm:p-5 relative">
            <div className="absolute -top-3 left-4 px-2 bg-black text-white dark:bg-white dark:text-black tankobon-label border border-black dark:border-white">
              ACTIVE DESIGNATION // 現在の専門
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 min-h-[3rem]">
              <span className="tankobon-label opacity-60 flex items-center gap-1">
                <Sparkles size={14} className="text-[#ff2a5f]" />
                CLASS :
              </span>
              
              <div className={`transition-all duration-300 transform ${fade ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} flex flex-col items-center sm:items-end`}>
                <span className="font-display text-xl sm:text-2xl md:text-3xl tracking-tight text-[#ff2a5f]">
                  {roles[roleIndex].en}
                </span>
                <span className="tankobon-label opacity-70">
                  「 {roles[roleIndex].jp} 」
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Narrative Text */}
        <p 
          className="text-base sm:text-lg md:text-xl mb-12 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          I design, build, and operate the full stack myself — from bare-metal Linux and self-hosted services to GPU inference servers and privacy-first browsers. Data stays on hardware I control.
        </p>

        {/* Inked Comic Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mx-auto">
          <a 
            href="#projects" 
            className="manga-box-red w-full sm:w-auto px-8 py-4 bg-[#ff2a5f] text-white flex items-center justify-center gap-2 active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            <span className="tankobon-label">READ WORK (PROJECTS)</span>
          </a>
          
          <a 
            href="/api/cv/pdf" 
            className="manga-box w-full sm:w-auto px-8 py-4 bg-white text-black dark:bg-[#111114] dark:text-white flex items-center justify-center gap-2 active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            <span className="tankobon-label">VIEW DOSSIER (CV)</span>
          </a>
        </div>
      </div>
    </div>
  );
}