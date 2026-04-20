import type { Metadata } from "next";
// @ts-ignore - allow importing global CSS as a side-effect; Next.js handles global CSS at runtime
import "./globals.css";
import FloatingLines from "@/components/ui/FloatingLines";

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
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@400;600;800;900&display=swap"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="min-h-screen antialiased bg-background text-foreground">
        {/* Place FloatingLines behind page content so translucent panels can reveal it */}
        <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
          <FloatingLines 
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={5}
            lineDistance={5}
            bendRadius={5}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
