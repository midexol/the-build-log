"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function NewspaperHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-paper border-b border-ink sticky top-0 z-50 transition-all duration-300">
      {/* Vintage Date Bar */}
      <div
        className={`datebar px-6 transition-all duration-300 overflow-hidden flex flex-wrap items-center justify-between gap-2 max-w-6xl mx-auto ${
          isScrolled ? "max-h-0 py-0 border-none opacity-0" : "max-h-12 py-1.5 opacity-100"
        }`}
      >
        <div>VOL. I, NO. 42 • EST. 2026</div>
        <div className="font-semibold text-ink">THE BUILD LOG • INTERNSHIP CHRONICLE</div>
        <div>SATURDAY, AUGUST 22, 2026</div>
      </div>

      {/* Vintage Centered Masthead Banner (Collapses smoothly on Scroll) */}
      <div
        className={`max-w-6xl mx-auto px-6 text-center border-t border-b border-ink bg-paper transition-all duration-300 ease-in-out overflow-hidden ${
          isScrolled
            ? "max-h-0 py-0 my-0 border-none opacity-0 pointer-events-none"
            : "max-h-96 py-6 my-0 opacity-100"
        }`}
      >
        <p className="font-mono-tag text-xs tracking-widest text-red uppercase mb-1 font-bold">
          DOCUMENTING AN INTERNSHIP IN PUBLIC
        </p>
        <Link href="/" className="inline-block group">
          <h1 className="font-display text-4xl sm:text-6xl font-black text-ink tracking-tight hover:opacity-90 transition-opacity uppercase">
            The Build Log
          </h1>
        </Link>
        <p className="font-serif italic text-muted text-sm sm:text-base mt-2 max-w-xl mx-auto">
          &ldquo;All the SQL queries, Python automation, and engineering notes fit to print.&rdquo;
        </p>
      </div>

      {/* Vintage Subnav Line (Compact Brand Title appears on Scroll) */}
      <nav className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between border-t border-ink bg-paper font-mono-tag text-xs tracking-wider uppercase">
        <div className="flex items-center gap-4 sm:gap-8 font-semibold text-ink">
          {/* Compact brand title when masthead is collapsed */}
          <Link
            href="/"
            className={`font-display font-black text-sm text-ink uppercase tracking-tight hover:text-red transition-all duration-300 flex items-center gap-2 ${
              isScrolled ? "opacity-100 max-w-xs mr-2" : "opacity-0 max-w-0 pointer-events-none overflow-hidden"
            }`}
          >
            <span className="text-red font-mono-tag">§</span>
            <span>THE BUILD LOG</span>
            <span className="text-rule font-normal">|</span>
          </Link>

          <Link href="/" className="hover:text-red transition-colors flex items-center gap-1.5">
            <span className="text-red">§</span> Front Page
          </Link>
          <Link href="/blog" className="hover:text-red transition-colors flex items-center gap-1.5">
            <span className="text-red">§</span> Archives
          </Link>
          <Link href="/about" className="hover:text-red transition-colors flex items-center gap-1.5">
            <span className="text-red">§</span> About Author
          </Link>
        </div>
        <a
          href="https://midexol.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-xs py-1 px-3 flex items-center gap-1.5"
        >
          <Mail size={13} />
          Dispatch
        </a>
      </nav>
    </header>
  );
}
