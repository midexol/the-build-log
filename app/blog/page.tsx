import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { format } from "date-fns";

export const metadata = {
  title: "Posts",
  description: "All entries from The Build Log — Mide_xol's internship journal.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="font-mono text-sm text-signal mb-2">// all entries</p>
      <h1 className="font-mono text-2xl font-semibold text-ink mb-2">The archive</h1>
      <p className="text-muted mb-12">{posts.length} post{posts.length !== 1 ? "s" : ""} and counting.</p>

      <div className="divide-y divide-line">
        {posts.length === 0 ? (
          <p className="text-muted font-mono text-sm py-6">No posts yet. Check back soon.</p>
        ) : (
          posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block py-6 group first:pt-0"
            >
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <p className="commit-id font-mono text-xs text-muted">
                  {post.slug.slice(0, 7)}
                </p>
                <p className="font-mono text-xs text-muted whitespace-nowrap">
                  {format(new Date(post.date), "MMM d, yyyy")} · {post.readingTime}
                </p>
              </div>
              <h2 className="text-lg font-semibold text-ink group-hover:text-signal transition-colors">
                {post.title}
              </h2>
              <p className="text-muted mt-1">{post.summary}</p>
              {post.tags.length > 0 && (
                <div className="flex gap-2 mt-3 flex-wrap">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-signal bg-signal/10 px-2 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
