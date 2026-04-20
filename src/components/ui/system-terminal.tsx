"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, Circle, Play } from "lucide-react";

export default function SystemTerminal({ isDarkMode = true }: { isDarkMode?: boolean }) {
  const [history, setHistory] = useState<{cmd: string, out: string}[]>([
    { 
      cmd: "systemctl status lakshya.service", 
      out: `● lakshya.service - Core System Builder & Developer Protocol
   Loaded: loaded (/etc/systemd/system/lakshya.service; enabled)
   Active: active (running) since Boot
   Main PID: 1337 (node)
   Tasks: 42 (limit: 32768)
   Memory: 64.2M
   CPU: 1.2% OLLAMA INFERENCE ACTIVE

Jan 01 00:00:00 nexus systemd[1]: Started lakshya.service.
Jan 01 00:00:01 nexus lakshya[1337]: [INFO] Deploying local-first pipelines...
Jan 01 00:00:02 nexus lakshya[1337]: [INFO] Routing Tailscale zero-trust packets...`
    }
  ]);
  
  const commands = [
    { 
      id: "whoami", 
      label: "whoami", 
      out: "lakshya_agarwal\n----------------\n> Role: Developer / Systems Builder\n> Location: Kota, India\n> Focus: Linux, Docker, AI Pipelines\n> Currently building: CashWand & Aegis Browser"
    },
    { 
      id: "docker", 
      label: "docker ps", 
      out: `CONTAINER ID   IMAGE                  COMMAND             CREATED       STATUS       PORTS     NAMES
9a8b7c6d5e4f   ollama/ollama          "/bin/ollama..."    2 weeks ago   Up 4 days    11434/tcp ollama-local
1b2c3d4e5f6g   linuxserver/jellyfin   "/init"             3 weeks ago   Up 12 days   8096/tcp  jellyfin-media
7c6d5e4f3a2b   tailscale/tailscale    "/usr/local/bin..." 1 month ago   Up 42 days             ts-exit-node
f8a9b0c1d2e3   postgres:15-alpine     "docker-entry..."   1 month ago   Up 42 days   5432/tcp  cashwand-db`
    },
    { 
      id: "neofetch", 
      label: "neofetch", 
      out: `       _,met$$$$$gg.          lakshya@nexus
    ,g$$$$$$$$$$$$$$$P.       -------------
  ,g$$P"     """Y$.".         OS: Debian GNU/Linux 12 (bookworm) x86_64
 ,$$P'              \`$$$.     Kernel: 6.1.0-18-amd64
',$$P       ,ggs.     \`$$b:   Uptime: 42 days, 13 hours, 37 mins
\`d$$'     ,$P"   .    $$$     Packages: 1337 (dpkg)
 $$P      d$'     ,    $$P    Shell: zsh 5.9
 $$:      $$.   -    ,d$$'    Terminal: tmux
 $$;      Y$b._   _,d$P'      CPU: AMD Ryzen 5 5600X (12) @ 3.700GHz
 Y$$.    \`.\`"Y$$$$P"'         Memory: 6412MiB / 32000MiB
 \`$$b      "-.__
  \`Y$$`
    },
    { 
      id: "ping", 
      label: "ping 1.1.1.1", 
      out: `PING 1.1.1.1 (1.1.1.1) 56(84) bytes of data.
64 bytes from 1.1.1.1: icmp_seq=1 ttl=59 time=12.4 ms
64 bytes from 1.1.1.1: icmp_seq=2 ttl=59 time=11.9 ms
64 bytes from 1.1.1.1: icmp_seq=3 ttl=59 time=12.1 ms

--- 1.1.1.1 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
rtt min/avg/max/mdev = 11.9/12.13/12.4/0.25 ms`
    }
  ];

  const handleCommand = (cmd: typeof commands[0]) => {
    setHistory(prev => [...prev, { cmd: cmd.label, out: cmd.out }]);
  };
  
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Safely scroll only the terminal container, not the window viewport
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [history]);

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border backdrop-blur-3xl font-mono text-sm leading-relaxed transition-all duration-500 group relative z-10" style={{ backgroundColor: isDarkMode ? 'rgba(5,5,5,0.9)' : 'rgba(255,255,255,0.95)', borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', boxShadow: isDarkMode ? '0 30px 60px -20px rgba(0,0,0,0.5)' : '0 20px 40px -10px rgba(0,0,0,0.1)' }}>
      
      {/* 1px glowing lip */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 group-hover:via-[#C3E41D]/50 to-transparent transition-colors duration-500" />
      
      {/* Terminal Title Bar */}
      <div className="flex items-center px-4 py-3 border-b" style={{ backgroundColor: isDarkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)', borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
        <div className="flex gap-2 mr-4">
          <Circle size={12} className="fill-red-500/80 text-red-500/20" />
          <Circle size={12} className="fill-yellow-500/80 text-yellow-500/20" />
          <Circle size={12} className="fill-green-500/80 text-green-500/20" />
        </div>
        <div className="flex-1 text-center text-xs font-semibold flex items-center justify-center gap-2 tracking-widest uppercase" style={{ color: isDarkMode ? '#737373' : '#525252' }}>
          <TerminalIcon size={14} /> lakshya@nexus:~
        </div>
      </div>
      
      {/* Terminal Console Output */}
      <div ref={scrollRef} className="p-6 h-[350px] md:h-[450px] overflow-y-auto scrollbar-thin scrollbar-track-transparent transition-colors" style={{ scrollbarColor: isDarkMode ? 'rgba(255,255,255,0.1) transparent' : 'rgba(0,0,0,0.1) transparent' }}>
        {history.map((item, i) => (
          <div key={i} className="mb-6 animate-[fadeIn_0.3s_ease-out]">
            <div className="flex items-center gap-2 text-[#C3E41D] mb-2 font-bold tracking-wide">
              <span className="text-emerald-500">lakshya@nexus</span>
              <span style={{ color: isDarkMode ? 'white' : '#171717' }}>:</span>
              <span className="text-blue-400">~</span>
              <span style={{ color: isDarkMode ? 'white' : '#171717' }}>$</span> 
              <span style={{ color: isDarkMode ? '#e5e5e5' : '#262626' }}>{item.cmd}</span>
            </div>
            <pre className="whitespace-pre-wrap font-mono text-xs sm:text-sm pl-4 border-l-2 transition-colors duration-500" style={{ color: isDarkMode ? '#a3a3a3' : '#525252', borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
              {item.out}
            </pre>
          </div>
        ))}
      </div>
      
      {/* Interactive Command Palette */}
      <div className="border-t p-5 flex flex-col sm:flex-row items-center gap-4" style={{ backgroundColor: isDarkMode ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)', borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
        <span className="text-xs uppercase tracking-widest font-bold hidden sm:block animate-pulse text-[#C3E41D]">Execute &gt;_</span>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto overflow-hidden">
          {commands.map((c) => (
            <button 
              key={c.id} 
              onClick={() => handleCommand(c)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 border rounded-lg transition-all duration-300 active:scale-[0.97] text-xs font-bold whitespace-nowrap" style={{ backgroundColor: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)', borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', color: isDarkMode ? '#d4d4d4' : '#404040' }}
            >
              <Play size={12} className="opacity-60" /> {c.label}
            </button>
          ))}
          <button onClick={() => setHistory([])} className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-bold rounded-lg transition-all active:scale-95" style={{ color: isDarkMode ? '#737373' : '#737373', backgroundColor: 'transparent', border: '1px solid transparent' }}>Clear</button>
        </div>
      </div>
    </div>
  );
}
