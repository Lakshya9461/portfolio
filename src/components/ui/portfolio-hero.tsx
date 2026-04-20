"use client";

import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

const roles = ["Developer", "Systems Builder", "Self-Hoster", "Linux Engineer"];

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
      }, 500);
    }, 3500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full min-h-[95vh] flex flex-col items-center justify-center overflow-hidden" style={{ backgroundColor: isDarkMode ? '#020202' : '#f5f5f5' }}>
      
      {/* 1. Cinematic SVG Noise Grain Filter */}
      <svg className="pointer-events-none fixed isolate z-50 opacity-30 mix-blend-soft-light inset-0 w-full h-full">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* 2. Visual Hook: Spinning Holographic Mesh Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] opacity-40 select-none pointer-events-none mix-blend-screen z-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#C3E41D] via-[#4d5910] to-[#0a0a0a] rounded-full blur-[100px] animate-[spin_10s_linear_infinite]" />
        <div className="absolute inset-0 bg-gradient-to-bl from-[#121a02] via-[#C3E41D] to-[#0a0a0a] rounded-full blur-[120px] animate-[spin_15s_reverse_linear_infinite]" />
      </div>

      {/* 3. Grid Floor for Architectural Depth */}
      <div className="absolute inset-0 z-0 bg-[size:4rem_4rem] pointer-events-none" style={{ backgroundImage: isDarkMode ? 'linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)' : 'linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)', maskImage: 'radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)' }} />

      {/* 4. Foreground Edge Mask to push hero forward dynamically */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t z-10 pointer-events-none" style={{ from: isDarkMode ? 'black' : '#f5f5f5', to: 'transparent' }} />

      {/* Content */}
      <div className={`relative z-20 flex flex-col items-center text-center max-w-5xl px-4 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        
        {/* Availability Badge */}
        <div className="mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]" style={{ backgroundColor: isDarkMode ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.6)', borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C3E41D] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C3E41D]"></span>
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase" style={{ color: isDarkMode ? '#d4d4d4' : '#404040' }}>Available for deployment</span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-4 leading-tight drop-shadow-2xl" style={{ fontFamily: 'Outfit, sans-serif', color: isDarkMode ? 'white' : '#171717' }}>
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-100 to-neutral-500">Lakshya</span>
        </h1>
        
        {/* Rotating Roles Text Element */}
        <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-10 min-h-[1.5em] flex items-center justify-center gap-2 md:gap-3 drop-shadow-lg" style={{ fontFamily: 'Outfit, sans-serif', color: isDarkMode ? '#d4d4d4' : '#404040' }}>
          <span className="font-light" style={{ color: isDarkMode ? '#737373' : '#a3a3a3' }}>I am a</span>
          <span className={`inline-block transition-all duration-500 transform ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} text-transparent bg-clip-text bg-gradient-to-r from-[#C3E41D] to-[#f4ffb8] drop-shadow-[0_0_15px_rgba(195,228,29,0.3)]`}>
             {roles[roleIndex]}
          </span>
        </div>

        <p className="text-base sm:text-lg md:text-xl mb-12 max-w-3xl mx-auto font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: isDarkMode ? '#a3a3a3' : '#525252' }}>
          I engineer <span className="font-medium" style={{ color: isDarkMode ? 'white' : '#171717' }}>Linux systems</span>, <span className="font-medium" style={{ color: isDarkMode ? 'white' : '#171717' }}>Docker architectures</span>, and <span className="font-medium" style={{ color: isDarkMode ? 'white' : '#171717' }}>AI workflows</span> built strictly for performance, privacy, and scale.
        </p>
        
        {/* Heavy Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full relative z-30">
          <a href="#projects" className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-[#C3E41D] text-black font-black uppercase tracking-widest rounded-xl hover:bg-[#d4f542] transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-[0_0_40px_rgba(195,228,29,0.3)] hover:shadow-[0_0_60px_rgba(195,228,29,0.5)] w-full sm:w-auto group">
            View Projects
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 group-hover:scale-110 transition-transform" />
          </a>
          <a href="#contact" className="px-8 py-4 border font-bold uppercase tracking-widest rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 w-full sm:w-auto backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]" style={{ backgroundColor: isDarkMode ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.8)', borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', color: isDarkMode ? 'white' : '#171717' }}>
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
