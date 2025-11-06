import type { Metadata } from "next";
// @ts-ignore - allow importing global CSS as a side-effect; Next.js handles global CSS at runtime
import "./globals.css";
import Hyperspeed from "@/components/ui/hyperspeed";

export const metadata: Metadata = {
  title: "Lakshya Agarwal | Developer • Researcher • Self-Hoster",
  description: "Code, connect, and create — the self-hosted way.",
  icons: {
    icon:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><rect width='16' height='16' fill='%23C3E41D'/></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try {
              const stored = localStorage.getItem('theme');
              const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
              const light = stored ? stored === 'light' : prefersLight;
              document.documentElement.classList.toggle('light', light);
              document.documentElement.classList.toggle('dark', !light);
            } catch(e) {} })();`,
          }}
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="min-h-screen antialiased bg-background text-foreground">
        <div className="pointer-events-none fixed inset-0 z-20 mix-blend-screen opacity-70">
          <Hyperspeed />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
