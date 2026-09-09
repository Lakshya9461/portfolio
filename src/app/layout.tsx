import type { Metadata } from "next";
// @ts-ignore - allow importing global CSS as a side-effect; Next.js handles global CSS at runtime
import "./globals.css";
import "@fontsource/dela-gothic-one";
import "@fontsource/space-grotesk";

export const metadata: Metadata = {
  title: "Lakshya Agarwal | 荒巻 — Inked Portfolio",
  description: "Full-stack engineer, Linux homelab builder, and privacy-first systems architect.",
  icons: {
    icon:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><rect width='16' height='16' fill='%2309090b'/><text x='50%25' y='65%25' dominant-baseline='middle' text-anchor='middle' font-size='10' font-weight='900' fill='%23ff2a5f'>極</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#09090b" />
      </head>
      <body className="min-h-screen antialiased bg-background text-foreground">
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
