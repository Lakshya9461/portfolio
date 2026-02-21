import PortfolioHero from "@/components/ui/portfolio-hero";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PortfolioHero />

      {/* About */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-black/80 dark:bg-black/80 text-foreground">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/10 dark:bg-black/60 backdrop-blur-sm supports-[backdrop-filter]:backdrop-blur-md p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">About Me</h2>
            <div className="space-y-6">
            <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
              I'm a student at <strong className="text-black dark:text-white font-semibold">JK Lakshmipat University</strong> with a strong focus on 
              applied artificial intelligence, systems engineering, and modern software infrastructure. My work centers on designing and building 
              reliable, efficient AI-powered systems for real-world use cases.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
              I am a hands-on builder who works across the full stack—developing 
              <strong className="text-black dark:text-white font-semibold"> React and Next.js frontends</strong>, 
              <strong className="text-black dark:text-white font-semibold"> Python-based backends</strong>, and 
              <strong className="text-black dark:text-white font-semibold"> containerized deployments using Docker</strong>. 
              I emphasize clean architecture, performance, and long-term maintainability.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
              I am particularly interested in self-hosted and privacy-preserving systems. Managing my own servers has given me 
              practical experience with Linux, networking, container orchestration, and secure remote access. 
              I enjoy working close to the system layer to understand how software behaves end to end.
            </p>
            </div>

            {/* Key Areas */}
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="p-6 rounded-lg bg-white/30 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-[#C3E41D]/50 transition-colors">
                <div className="text-2xl mb-3">🧠</div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">AI Systems</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Designing and implementing practical AI systems using LLMs, NLP pipelines, and local inference workflows.</p>
              </div>
              <div className="p-6 rounded-lg bg-white/30 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-[#C3E41D]/50 transition-colors">
                <div className="text-2xl mb-3">⚙️</div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Full-Stack Engineering</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Building scalable, production-ready applications with modern frontend frameworks and backend architectures.</p>
              </div>
              <div className="p-6 rounded-lg bg-white/30 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-[#C3E41D]/50 transition-colors">
                <div className="text-2xl mb-3">🖥️</div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Self-Hosted Infrastructure</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Deploying and managing private servers, secure tunnels, containers, and monitoring systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
  <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 bg-black/80 dark:bg-black/80 text-foreground">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-3xl">
            Practical systems I've built across AI, automation, and self-hosted infrastructure. 
            Each project reflects hands-on experience with real deployment, performance trade-offs, and system design decisions.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Voice-Controlled AI Assistant",
                desc:
                  "A local-first conversational AI assistant built with Python and the Ollama API. Implements low-latency, real-time speech recognition, NLP-based intent handling, and voice-driven command execution for interacting with system-level tasks.",
                stack: ["Python", "Ollama API", "SpeechRecognition", "pyttsx3", "NLP"],
                github: "https://github.com/Lakshya9461/Voice-Ollama-Assistant",
                impact: "Real-time voice interaction",
              },
              {
                title: "Self-Hosted Media Server",
                desc:
                  "A Jellyfin-inspired platform with a custom Python backend, React frontend, and Cloudflare Tunnel integration. Enables secure remote streaming, media management, and cross-device access—all without relying on third-party cloud services.",
                stack: ["Python", "React", "Cloudflare Tunnel", "Docker", "REST API"],
                github: "https://github.com/Lakshya9461",
                impact: "Remote access via Cloudflare",
              },
              {
                title: "Home Server Dashboard (Glance)",
                desc:
                  "A Docker-based monitoring dashboard for managing multiple self-hosted services. Provides real-time status checks, resource monitoring, and quick access to all deployed applications—essential for maintaining a personal infrastructure.",
                stack: ["Docker", "Linux", "CasaOS", "Monitoring", "Shell Scripting"],
                github: "https://github.com/Lakshya9461",
                impact: "15+ services managed",
              },
              {
                title: "Secure Debian Server Setup",
                desc:
                  "A hardened Debian 12 server implementation with Tailscale VPN, custom firewall rules, and secure remote access protocols. Focused on privacy, data security, and network isolation—demonstrating infrastructure security best practices.",
                stack: ["Debian 12", "Tailscale", "iptables", "Security", "Networking"],
                github: "https://github.com/Lakshya9461",
                impact: "Zero-trust network access",
              },
            ].map((p) => (
              <article 
                key={p.title} 
                className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-[#C3E41D]/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-[#C3E41D] transition-colors">{p.title}</h3>
                  <a 
                    href={p.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-foreground transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="mb-4">
                  <span className="text-xs font-semibold text-[#C3E41D] uppercase tracking-wider">
                    {p.impact}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span 
                      key={t} 
                      className="text-xs rounded-md border border-white/10 px-2.5 py-1 text-neutral-300 bg-black/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
  <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 bg-black/80 dark:bg-black/80 text-foreground">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-neutral-400 text-lg max-w-3xl">
              A focused skill set spanning AI systems, backend engineering, and infrastructure—used to build scalable, reliable, and locally deployed software systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="text-[#C3E41D]">▸</span> AI & Machine Learning
              </h3>
              <ul className="text-neutral-400 space-y-2 pl-6">
                <li>• Ollama API, LLMs, local inference workflows</li>
                <li>• NLP pipelines and prompt engineering</li>
                <li>• Speech recognition and text-to-speech systems</li>
                <li>• Model deployment and performance optimization</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="text-[#C3E41D]">▸</span> Programming Languages
              </h3>
              <ul className="text-neutral-400 space-y-2 pl-6">
                <li>• Python (primary: automation, backends, AI)</li>
                <li>• C (systems programming)</li>
                <li>• VHDL (hardware description)</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="text-[#C3E41D]">▸</span> Web & Full-Stack
              </h3>
              <ul className="text-neutral-400 space-y-2 pl-6">
                <li>• React, Next.js, Tailwind CSS</li>
                <li>• RESTful APIs, WebSockets</li>
                <li>• Frontend performance optimization</li>
                <li>• Responsive, accessible design patterns</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="text-[#C3E41D]">▸</span> Infrastructure & DevOps
              </h3>
              <ul className="text-neutral-400 space-y-2 pl-6">
                <li>• Docker, Docker Compose (container orchestration)</li>
                <li>• Debian, Ubuntu, Proxmox (server management)</li>
                <li>• Cloudflare Tunnel, Tailscale VPN</li>
                <li>• CasaOS, self-hosted services (Immich, Jellyfin, FileBrowser)</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="text-[#C3E41D]">▸</span> Security & Networking
              </h3>
              <ul className="text-neutral-400 space-y-2 pl-6">
                <li>• Server hardening, firewall configuration (iptables)</li>
                <li>• Zero-trust networking (Tailscale)</li>
                <li>• Privacy-focused tooling (Tails OS)</li>
                <li>• Secure remote access protocols</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <span className="text-[#C3E41D]">▸</span> Currently Exploring
              </h3>
              <ul className="text-neutral-400 space-y-2 pl-6">
                <li>• Agentic AI systems and local-first tooling</li>
                <li>• Distributed systems and microservices</li>
                <li>• Advanced data structures and algorithms</li>
                <li>• Quantum computing fundamentals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
  <section id="resume" className="py-16 sm:py-24 px-4 sm:px-6 bg-black/80 dark:bg-black/80 text-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Resume & Background</h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            An overview of my academic background, technical projects, and hands-on experience in building AI-driven systems and managing production-grade infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="https://drive.google.com/file/d/1YFxAtTqqV_A6DbV3FfjQkkV_sxXMNu70/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#C3E41D] text-black px-8 py-3 font-semibold hover:bg-[#d4f542] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/lakshya70"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/20 text-foreground px-8 py-3 font-semibold hover:border-white/40 hover:bg-white/5 transition-colors"
            >
              <Linkedin size={20} />
              View LinkedIn
            </a>
          </div>
        </div>
      </section>
      {/* Research Focus */}
  <section className="py-16 sm:py-24 px-4 sm:px-6 bg-background text-foreground">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-[#C3E41D]/20 bg-gradient-to-br from-[#C3E41D]/5 to-transparent p-5 sm:p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-3xl">🔬</div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Currently Building</h2>
                <p className="text-[#C3E41D] font-semibold text-sm uppercase tracking-wider mb-4">Local Agentic AI Browser</p>
              </div>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed mb-6">
              I am building a local-first, agent-based AI browser focused on automating complex workflows while keeping computation and data on the user's machine. 
              The project emphasizes agent planning, tool orchestration, and tight system integration using locally hosted LLMs.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">Key Areas</h3>
                <ul className="text-neutral-500 dark:text-neutral-400 space-y-2 text-sm">
                  <li>• Agent planning and task decomposition</li>
                  <li>• Tool-calling and system automation</li>
                  <li>• Local inference and privacy-first design</li>
                  <li>• Performance and reliability considerations</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">Approach</h3>
                <ul className="text-neutral-500 dark:text-neutral-400 space-y-2 text-sm">
                  <li>• Modular agent architecture design</li>
                  <li>• Prototyping with local LLM toolchains</li>
                  <li>• Iterative testing and optimization</li>
                  <li>• Focus on user privacy and data control</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
  <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-black/80 dark:bg-black/80 text-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Let's Connect</h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
            I'm open to discussing internships, research opportunities, and technical collaborations in AI systems and infrastructure. 
            Whether you're working on something interesting or just want to connect—reach out!
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 mt-8">
            <a 
              href="mailto:la9928609007@gmail.com" 
              className="group inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#C3E41D]/50 hover:bg-white/10 active:bg-white/15 transition-all w-full sm:w-auto justify-center"
            >
              <Mail size={20} className="text-neutral-400 group-hover:text-[#C3E41D] transition-colors flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base truncate">la9928609007@gmail.com</span>
            </a>
            <a 
              href="https://github.com/Lakshya9461" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#C3E41D]/50 hover:bg-white/10 active:bg-white/15 transition-all w-full sm:w-auto justify-center"
            >
              <Github size={20} className="text-neutral-400 group-hover:text-[#C3E41D] transition-colors flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">Lakshya9461</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lakshya-agarwal-8b3070313"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#C3E41D]/50 hover:bg-white/10 active:bg-white/15 transition-all w-full sm:w-auto justify-center"
            >
              <Linkedin size={20} className="text-neutral-400 group-hover:text-[#C3E41D] transition-colors flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">Lakshya Agarwal</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
