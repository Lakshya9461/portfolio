# Portfolio Revamp Progress

## Project Goals
Create a modern, premium developer portfolio website with a clean, minimal aesthetic.
- **Design style**: Dark theme, glassmorphism, subtle gradients, smooth animations, minimal typography, grid-based layout.
- **Tone**: Professional, modern, slightly futuristic.

## Milestone / Task List
- [x] **Setup**: Create `progress.md` to track updates.
- [x] **Layout & Core**: 
  - [x] Sticky navbar with blur effect.
  - [x] Smooth scrolling behavior.
- [x] **Sections**:
  - [x] Fullscreen Hero section (Custom heading, glowing particles, CTAs).
  - [x] Projects showcase (3-column glassmorphism cards, scale/glow hover, Code/Demo buttons).
  - [x] Tech stack grid (Icon based grid with scaling/glow hover).
  - [x] Experience timeline.
  - [x] Blog preview section (Renamed to Writing, added previews & minimal cards).
  - [x] Contact section (Fully designed form with focus states and socials).
- [x] **Animations & Interactivity**:
  - [x] Section-based reveal animations.
  - [x] Hover effects on cards.
  - [x] Background ambient glow and micro-interactions (stagger, bounce, scaling).
- [x] **Responsiveness**: Ensure design scales elegantly across devices.

- [x] **Advanced Interactions**:
  - [x] Created immersive 3D parallax physics on project cards.
  - [x] Refined micro-interactions on nav links, inputs, and footer.
  - [x] Deployed `SystemTerminal` to simulate internal server access and Linux architecture.
- [x] **Typography & Hierarchy**: Established high-contrast premium typography (`Outfit` scaling up to 6xl and custom `leading-[1.8]` line-heights).
- [x] **Light Mode Theme**:
  - [x] Added theme toggle button in navbar (sun/moon icons).
  - [x] Implemented CSS variables for light/dark color schemes.
  - [x] Updated all sections (Hero, About, Tech Stack, Terminal, Experience, Projects, Writing, Contact) with theme-aware colors.
  - [x] Ensured readable fonts and contrast in both modes.
  - [x] Persisted theme preference in localStorage.

- [x] **Tech Stack & Section Refinement**:
  - [x] Removed System Terminal section and unused terminal component.
  - [x] Removed Flutter and Electron from the Tech Stack showcase.
- [x] **CV / Resume Sync**:
  - [x] Integrated updated background, research experience (Early Sepsis-3 Prediction on MIMIC-IV supervised by Dr. Amit Sinhal).
  - [x] Added Local LLM & AI Agent Infrastructure (RTX 4070, Ollama, Nginx, Hermes Agent) and Self-Hosted Homelab projects.
  - [x] Refreshed Tech Stack with PyTorch, Nginx, PostgreSQL/SQL alongside core tools.
  - [x] Added CV download/view buttons in Navbar, Hero, and Footer linking to `Lakshya_Agarwal_CV.pdf`.
  - [x] Updated location (Jaipur, India), email (`la9928609007@gmail.com`), and personal domain (`lakshya9461.in`).

- [x] **Inked Manga Panel Redesign**:
  - [x] Designed custom comic/manga palette (Deep Pitch Ink `#09090b` dark mode & Authentic Tankōbon newsprint paper `#fbf9f4` light mode).
  - [x] Implemented authentic screentone halftone dots (`manga-halftone`) and speed-line hatching (`manga-speed-hatch`).
  - [x] Added crisp comic panel borders with hard offset box-shadows (`manga-box`, `manga-box-red`) and active stamping physics.
  - [x] Integrated manga typography: `Dela Gothic One`, `Space Grotesk`, `Noto Sans JP`, with chapter titles (`CHAPTER 01 // 能力値`, `CHAPTER 02 // 装備`, etc.).
  - [x] Transformed Hero into a Manga Cover / Opening Splash Page with volume indicators and Japanese Inkan / Hanko red seal (`極`).
  - [x] Refashioned all sections into distinct episodic manga panels (Character Sheet, Arsenal Roster, Chronicles Timeline, Masterwork Covers, Field Dispatches, and Transmission).

- [x] **Self-Hosted Fonts & FOUC Fix**:
  - [x] Self-hosted `Dela Gothic One` + `Space Grotesk` via `@fontsource`.
  - [x] Removed Google Fonts `<link>` (eliminated "Layout was forced" FOUC; build is network-free).
- [x] **Deploy Access Fix**:
  - [x] Stale bot branches (`vercel/react-server-components-cve-vu-mei3hl`, `cloudflare/workers-autoconfig`) deleted from origin; `main` is the only branch.
  - [x] Global git author switched to owner account (`Lakshya9461` noreply) so Vercel on the Hobby plan accepts deployments.
- [x] **Repo Docs**:
  - [x] Added `AGENTS.md` with commands, design rules, and identity/content constraints.
- [x] **Manga Page-Turn Slideshow**:
  - [x] Full-viewport snap pages (desktop) — each section flips in like a tankoban page (gutter slide + tilt).
  - [x] Added fixed manga-reader page ribbon (right edge): progress rail, clickable page ticks, `VOL.n` counter.
  - [x] Disabled slideshow on mobile (normal vertical reading); respects `prefers-reduced-motion`.

---
*Last updated: Redesigned full portfolio theme into an authentic Inked Manga Panel aesthetic with custom screentones, Dela Gothic typography, and comic gutter layouts.*
