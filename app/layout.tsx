import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Twitter, Linkedin } from "lucide-react";
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
                  <Twitter size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/okunola-olamide-xielle526"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-navy transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
