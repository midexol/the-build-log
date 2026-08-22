import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { PostMeta } from "@/lib/posts";

export interface PostNavigationProps {
  prev: PostMeta | null;
  next: PostMeta | null;
}

export function PostNavigation({ prev, next }: PostNavigationProps) {
  if (!prev && !next) return null;

  return (
    <nav className="mt-12 pt-8 border-t border-ink grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono-tag">
      {/* Previous post (older) */}
      {prev ? (
        <Link
          href={`/blog/${prev.slug}`}
          className="group flex flex-col p-4 rounded-sm border border-ink bg-surface hover:bg-paper hover:shadow-newspaper transition-all"
        >
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red mb-1">
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 text-red" />
            <span>PREVIOUS DISPATCH</span>
          </div>
          <span className="font-display text-base font-bold text-ink group-hover:text-red transition-colors line-clamp-2">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {/* Next post (newer) */}
      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="group flex flex-col items-end text-right p-4 rounded-sm border border-ink bg-surface hover:bg-paper hover:shadow-newspaper transition-all sm:col-start-2"
        >
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red mb-1">
            <span>NEXT DISPATCH</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-red" />
          </div>
          <span className="font-display text-base font-bold text-ink group-hover:text-red transition-colors line-clamp-2">
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
