import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Build Log — Mide_xol",
    template: "%s — The Build Log",
  },
  description:
    "Documenting an internship in public: SQL, Python, team coordination, and shipping with AI as a pair programmer. By Olamide Okunola (@mide_xol).",
  authors: [{ name: "Olamide Okunola", url: "https://x.com/mide_xol" }],
  openGraph: {
    siteName: "The Build Log",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-line bg-panel">
            <nav className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
              <Link href="/" className="font-mono font-semibold text-ink tracking-tight">
                the_build_log
              </Link>
              <div className="flex gap-6 font-mono text-sm text-muted">
                <Link href="/blog" className="hover:text-signal transition-colors">
                  posts
                </Link>
                <Link href="/about" className="hover:text-signal transition-colors">
                  about
                </Link>
              </div>
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-line">
            <div className="max-w-3xl mx-auto px-6 py-8 font-mono text-xs text-muted flex items-center justify-between">
              <span>© 2026 Olamide Okunola · built with next.js</span>
              <div className="flex gap-4">
                <a
                  href="https://x.com/mide_xol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-signal transition-colors"
                >
                  x / twitter
                </a>
                <a
                  href="https://www.linkedin.com/in/okunola-olamide-xielle526"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-signal transition-colors"
                >
                  linkedin
                </a>
                <Link href="/feed.xml" className="hover:text-signal transition-colors">
                  rss
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
