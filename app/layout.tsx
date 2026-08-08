import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Build Log — Mide_xol",
    template: "%s — The Build Log",
  },
  description:
    "Documenting an internship in public: SQL, Python, team coordination, and shipping with AI as a pair programmer. By Olamide Okunola (@mide_xol).",
  authors: [{ name: "Olamide Okunola", url: "https://x.com/mide_xol" }],
  openGraph: { siteName: "The Build Log", locale: "en_US", type: "website" },
  alternates: { types: { "application/rss+xml": "/feed.xml" } },
};

function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z" />
    </svg>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          {/* ── Nav ── */}
          <header className="sticky top-0 z-50 bg-surface border-b border-border shadow-sm">
            <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
              <Link
                href="/"
                className="font-bold text-lg text-navy tracking-tight hover:opacity-80 transition-opacity"
              >
                the_build_log
              </Link>
              <div className="flex items-center gap-6">
                <div className="hidden sm:flex gap-6 text-sm font-medium text-muted">
                  <Link href="/blog" className="hover:text-navy transition-colors">
                    Posts
                  </Link>
                  <Link href="/about" className="hover:text-navy transition-colors">
                    About
                  </Link>
                </div>
                <a
                  href="https://midexol.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-1.5 px-4 flex items-center gap-1.5"
                >
                  <Mail size={14} />
                  Subscribe
                </a>
              </div>
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          {/* ── Footer ── */}
          <footer className="border-t border-border bg-surface mt-16">
            <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted">
                © 2026 Olamide Okunola · Built with Next.js, deployed on Vercel
              </p>
              <div className="flex gap-4 items-center">
                <a
                  href="https://midexol.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-navy transition-colors"
                  aria-label="Substack newsletter"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://x.com/mide_xol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-navy transition-colors"
                  aria-label="X / Twitter"
                >
                  <XIcon className="w-[18px] h-[18px]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/okunola-olamide-xielle526"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-navy transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-[18px] h-[18px]" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
