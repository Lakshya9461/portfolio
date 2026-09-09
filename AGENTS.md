# AGENTS.md

Single-page portfolio — Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, React Compiler enabled (`next.config.ts`). No tests, no CI. Keep changes small and build-verified.

## Commands

- `npm run dev` — dev server on :3000
- `npm run build` — production build (offline-safe; fonts are bundled)
- `npm run lint` — ESLint. Baseline has ~25 pre-existing errors/warnings (dead files + `any` in page.tsx + one `set-state-in-effect` in `portfolio-hero.tsx:25`). Do NOT fix these as a bulk task; just avoid adding new ones.

## Where things live

- ALL page content is in `src/app/page.tsx` ("use client", ~43KB). `src/app/layout.tsx` is metadata + font imports only.
- Only two real components: `src/components/ui/portfolio-hero.tsx` and `ui/button.tsx`.
- `src/components/ui/FloatingLines.*` and `LogoLoop.*` are DEAD leftovers (three.js/@react-three/fiber). Never wire them in; they exist only to justify package.json deps.
- No `src/lib`, API routes, server actions, or tests.

## Fonts (do not touch without reason)

- Self-hosted via `@fontsource/dela-gothic-one` + `@fontsource/space-grotesk`, imported in `layout.tsx`. Registered family names: `Dela Gothic One`, `Space Grotesk`.
- Do NOT add a Google Fonts `<link>` (caused the "Layout was forced before the page was fully loaded" FOUC) and do NOT use `next/font/google` — fonts.gstatic.com is unreachable here and the build times out.
- `Noto Sans JP` is a name-only system fallback for kanji — not bundled. Do not add it to @fontsource (huge).

## Styling (manga/tankoban design language)

- Tailwind v4 has no config file. Tokens live in `globals.css`: `@import "tailwindcss"` + `@theme inline` (`--font-sans` Space Grotesk, `--font-display` Dela Gothic One). Named colors like `bg-background`, `text-accent-red`.
- Custom classes are real CSS in globals.css (not utilities): `.manga-box`, `.manga-box-red`, `.manga-hanko`, `.manga-chapter` (+ `-mark`/`-label`/`-title`/`-meta`), `.tankobon-label`, halftone/hatch layers.
- Theme: `<html class="dark">` default; `@custom-variant dark`. Color tokens exist in `:root`, `:root.dark`, AND `:root.light` — light mode is real. When adding colors keep background/foreground + `--chapter-bg`/`--chapter-fg` in sync across all three.
- Accent is `--accent-red: #ff2a5f`; green/amber only for hero status dots.

## Design rules (user-mandated, keep)

- Exactly two typefaces and one accent color. Section headers are `.manga-chapter` divider bands with a `.tankobon-label` label and one short right-side meta phrase (e.g. "10 TOOLS, ZERO BLOAT").
- Reveals are fade-only (`RevealSection`: opacity, no translate/stagger).
- No eyebrow badges on sections, no chevrons/underlines on nav or CTAs, no fake "readiness" meters.
- `reactCompiler: true` — `setState` in effect bodies is a lint error (`react-hooks/set-state-in-effect`). Don't add such code.

## Content/identity constraints

- The user dropped the ML/AI identity. No "AI & ML ENGINEER", no "CLINICAL ML RESEARCHER". Hero titles are: FULL-STACK ENGINEER, SYSTEMS BUILDER, LINUX ENGINEER, CLOUD ARCHITECT.
- The site's CV link is `/Lakshya_Agarwal_CV.pdf` in `public/`. Root `resume.pdf` is a scratch copy that is NOT committed — don't touch it.

## Repo maintenance

- `progress.md` is the tracked milestone log; update it when scope changes.
- `.superdesign/` is gitignored tooling — never commit it.
- Small, well-scoped commits with short imperative messages (see `git log`).