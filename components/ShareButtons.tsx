"use client";

import { useState } from "react";
import { Copy, Check, Share2 } from "lucide-react";

export interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch {
        // Cancelled
      }
    }
  };

  const twitterUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&via=mide_xol`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  return (
    <div className="flex flex-wrap items-center gap-2 pt-2 font-mono-tag">
      <span className="text-xs font-bold uppercase tracking-wider text-muted mr-1">
        SHARE EDITION:
      </span>

      {/* Copy link button */}
      <button
        onClick={handleCopy}
        className="btn-outline text-xs py-1.5 px-3 cursor-pointer"
        title="Copy article link"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-red" />
            <span className="text-red font-bold">COPIED!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5 text-ink" />
            <span>COPY LINK</span>
          </>
        )}
      </button>

      {/* Share on X */}
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline text-xs py-1.5 px-3"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        <span>SHARE ON X</span>
      </a>

      {/* Share on LinkedIn */}
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline text-xs py-1.5 px-3"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
        <span>LINKEDIN</span>
      </a>

      {/* Native Web Share fallback */}
      {typeof navigator !== "undefined" && "share" in navigator && (
        <button
          onClick={handleNativeShare}
          className="btn-outline text-xs py-1.5 px-3 cursor-pointer"
        >
          <Share2 className="w-3.5 h-3.5 text-ink" />
          <span>MORE...</span>
        </button>
      )}
    </div>
  );
}
