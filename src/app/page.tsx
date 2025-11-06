import PortfolioHero from "@/components/ui/portfolio-hero";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PortfolioHero />

      {/* About */}
      <section id="about" className="py-24 px-6 bg-black/80 dark:bg-black/80 text-foreground">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/10 dark:bg-black/60 backdrop-blur-sm supports-[backdrop-filter]:backdrop-blur-md p-8 md:p-10 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">About Me</h2>
            <div className="space-y-6">
            <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
              I'm a student at <strong className="text-black dark:text-white font-semibold">JK Lakshmipat University</strong> exploring the human side of artificial intelligence. 
              My current research focuses on <strong className="text-black dark:text-white font-semibold">AI ethics, emotional intelligence, and human–AI interaction</strong>—understanding 
              how AI systems can be designed to serve humanity with empathy and responsibility.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
              Beyond research, I'm a builder. I develop full-stack projects from the ground up: 
              <strong className="text-black dark:text-white font-semibold"> React frontends</strong>, <strong className="text-black dark:text-white font-semibold">Python backends</strong>, and 
              <strong className="text-black dark:text-white font-semibold"> Docker-based deployments</strong>. I'm passionate about self-hosting—running my own infrastructure 
              gives me control, privacy, and deep insight into how systems work at every layer.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
              I believe the future of technology lies in <strong className="text-black dark:text-white font-semibold">thoughtful engineering</strong>—systems that are both 
              technically sophisticated and genuinely useful. Whether it's voice-controlled AI assistants, secure home servers, 
              or media platforms, I build to learn, and I learn to build better.
            </p>
            </div>

            {/* Key Areas */}
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="p-6 rounded-lg bg-white/30 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-[#C3E41D]/50 transition-colors">
                <div className="text-2xl mb-3">🧠</div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">AI Research</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Exploring emotional AI, ethics, and human-centered design in machine learning systems.</p>
              </div>
              <div className="p-6 rounded-lg bg-white/30 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-[#C3E41D]/50 transition-colors">
                <div className="text-2xl mb-3">⚙️</div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Full-Stack Development</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Building production-ready applications with modern web frameworks and cloud-native tools.</p>
              </div>
              <div className="p-6 rounded-lg bg-white/30 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-[#C3E41D]/50 transition-colors">
                <div className="text-2xl mb-3">🖥️</div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Self-Hosted Infrastructure</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Managing home servers, VPNs, media platforms, and secure remote access solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
  <section id="projects" className="py-24 px-6 bg-black/80 dark:bg-black/80 text-foreground">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-3xl">
            Real-world systems I've built to explore AI, automation, and self-hosted infrastructure. Each project taught me something new about engineering at scale.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Voice-Controlled AI Assistant",
                desc:
                  "A conversational AI system built with Python, Ollama API, and real-time speech processing. Features natural language understanding, voice command execution, and text-to-speech responses—bringing AI interaction closer to human conversation.",
                stack: ["Python", "Ollama API", "SpeechRecognition", "pyttsx3", "NLP"],
                github: "https://github.com/Lakshya9461",
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
  <section id="skills" className="py-24 px-6 bg-black/80 dark:bg-black/80 text-foreground">
        <div className="max-w-6xl mx-auto space-y-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-neutral-400 text-lg max-w-3xl">
              A blend of AI/ML expertise, systems programming, and infrastructure engineering—tools I use to build intelligent, scalable systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="text-[#C3E41D]">▸</span> AI & Machine Learning
              </h3>
              <ul className="text-neutral-400 space-y-2 pl-6">
                <li>• Ollama API, LLMs, NLP frameworks</li>
                <li>• SpeechRecognition, pyttsx3 (voice AI)</li>
                <li>• AI ethics & emotional intelligence research</li>
                <li>• Model fine-tuning and inference optimization</li>
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
                <li>• Emotional AI and human-centered design</li>
                <li>• Distributed systems and microservices</li>
                <li>• Advanced data structures (graphs, trees)</li>
                <li>• Quantum computing fundamentals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
  <section id="resume" className="py-24 px-6 bg-black/80 dark:bg-black/80 text-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Resume & Background</h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my academic journey, technical projects, research interests, and hands-on experience 
            building AI systems and infrastructure.
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
              href="https://www.linkedin.com/in/lakshya-agarwal-8b3070313"
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
  <section className="py-24 px-6 bg-background text-foreground">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-[#C3E41D]/20 bg-gradient-to-br from-[#C3E41D]/5 to-transparent p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-3xl">🔬</div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Currently Creating</h2>
                <p className="text-[#C3E41D] font-semibold text-sm uppercase tracking-wider mb-4">Local Agentic AI Browser</p>
              </div>
            </div>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              I'm exploring <strong className="text-foreground">how AI systems can understand and respond to human emotions</strong> in ethical, 
              meaningful ways. This work sits at the intersection of machine learning, psychology, and HCI—asking:
              Can AI be empathetic? How do we design systems that respect emotional context? What does responsible AI look like in practice?
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">Key Questions</h3>
                <ul className="text-neutral-400 space-y-2 text-sm">
                  <li>• Recognizing and modeling emotional states</li>
                  <li>• Ethical frameworks for emotional AI deployment</li>
                  <li>• Impact of AI on trust and human relationships</li>
                  <li>• Bias detection and mitigation in affective models</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">Approach</h3>
                <ul className="text-neutral-400 space-y-2 text-sm">
                  <li>• Literature review across affective computing</li>
                  <li>• Prototyping with NLP and voice AI toolchains</li>
                  <li>• Case studies of real-world applications</li>
                  <li>• Interdisciplinary lens (tech + ethics + psychology)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
  <section id="contact" className="py-24 px-6 bg-black/80 dark:bg-black/80 text-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Let's Connect</h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            I'm always excited to discuss AI research, collaborate on technical projects, or chat about self-hosting and infrastructure. 
            Whether you're working on something interesting or just want to connect—reach out!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <a 
              href="mailto:la9928609007@gmail.com" 
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#C3E41D]/50 hover:bg-white/10 transition-all"
            >
              <Mail size={20} className="text-neutral-400 group-hover:text-[#C3E41D] transition-colors" />
              <span className="font-medium">la9928609007@gmail.com</span>
            </a>
            <a 
              href="https://github.com/Lakshya9461" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#C3E41D]/50 hover:bg-white/10 transition-all"
            >
              <Github size={20} className="text-neutral-400 group-hover:text-[#C3E41D] transition-colors" />
              <span className="font-medium">Lakshya9461</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lakshya-agarwal-8b3070313"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#C3E41D]/50 hover:bg-white/10 transition-all"
            >
              <Linkedin size={20} className="text-neutral-400 group-hover:text-[#C3E41D] transition-colors" />
              <span className="font-medium">Lakshya Agarwal</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
