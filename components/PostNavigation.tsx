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
    <nav className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Previous post (older) */}
      {prev ? (
        <Link
          href={`/blog/${prev.slug}`}
          className="group flex flex-col p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all"
        >
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1 group-hover:text-blue-900 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Previous post</span>
          </div>
          <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2">
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
          className="group flex flex-col items-end text-right p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all sm:col-start-2"
        >
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1 group-hover:text-blue-900 transition-colors">
            <span>Next post</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </div>
          <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2">
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
