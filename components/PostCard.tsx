import Link from "next/link";
import { format } from "date-fns";
import type { PostMeta } from "@/lib/posts";

const BAND_HEIGHTS = ["h-2", "h-2", "h-2"]; // uniform — single colour

interface PostCardProps {
  post: PostMeta;
  index?: number;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="post-card group block">
      {/* Navy band */}
      <div className="post-card-band" />

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex gap-1.5 flex-wrap mb-3">
            {post.tags.map((tag) => (
              <span key={tag} className="tag-pill text-xs">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h2 className="font-bold text-base text-ink leading-snug mb-2 group-hover:text-navy transition-colors">
          {post.title}
        </h2>

        {/* Summary */}
        <p className="text-sm text-muted leading-relaxed flex-1 mb-4">
          {post.summary}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-subtle">
          <span>{format(new Date(post.date), "MMM d, yyyy")}</span>
          <span className="flex items-center gap-1">
            {post.readingTime}
            <span className="text-navy opacity-0 group-hover:opacity-100 transition-opacity ml-1">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
