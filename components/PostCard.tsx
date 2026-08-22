import Link from "next/link";
import { format } from "date-fns";
import type { PostMeta } from "@/lib/posts";

const BAND_HEIGHTS = ["h-2", "h-2", "h-2"]; // uniform — single colour

interface PostCardProps {
  post: PostMeta;
  index?: number;
}

export default function PostCard({ post, index }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="post-card group block">
      {/* Top ink band */}
      <div className="post-card-band" />

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Newspaper kicker / Tags */}
        <div className="flex items-center justify-between gap-2 mb-3">
          {post.tags.length > 0 && (
            <div className="flex gap-1.5 flex-wrap">
              {post.tags.map((tag) => (
                <span key={tag} className="tag-pill text-[10px]">
                  {tag}
                </span>
              ))}
            </div>
          )}
          {typeof index === "number" && (
            <span className="font-mono-tag text-[10px] uppercase text-red font-bold tracking-wider">
              SECTION {index + 1}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="font-display font-bold text-lg sm:text-xl text-ink leading-tight mb-3 group-hover:text-red transition-colors">
          {post.title}
        </h2>

        {/* Summary */}
        <p className="font-serif text-sm text-muted leading-relaxed flex-1 mb-5 line-clamp-3">
          {post.summary}
        </p>

        {/* Vintage hairline divider & Footer */}
        <div className="pt-3 border-t border-rule flex items-center justify-between text-xs font-mono-tag text-muted">
          <span>{format(new Date(post.date), "MMM d, yyyy").toUpperCase()}</span>
          <span className="flex items-center gap-1 font-semibold text-ink group-hover:text-red transition-colors">
            {post.readingTime.toUpperCase()}
            <span className="transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
