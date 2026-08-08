import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { format } from "date-fns";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-20 pb-16">
        <p className="font-mono text-sm text-signal mb-3">// intern building in public</p>
        <h1 className="font-mono text-3xl sm:text-4xl font-semibold text-ink leading-tight mb-4">
          SQL, Python, and keeping the team moving.
        </h1>
        <p className="text-muted text-lg leading-relaxed max-w-xl mb-6">
          I&apos;m Mide — data analyst, team coordinator, and developer at my internship.
          This is my running log: the wins, the failures, and the messy middle.
          No gatekeeping. Just honest lessons from someone building their career in public.
        </p>
        <div className="flex gap-4 font-mono text-sm">
          <a
            href="https://x.com/mide_xol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-signal hover:underline transition-colors"
          >
            @mide_xol ↗
          </a>
          <a
            href="https://www.linkedin.com/in/okunola-olamide-xielle526"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-signal transition-colors"
          >
            linkedin ↗
          </a>
        </div>
      </section>

      {/* Recent posts */}
      <section className="pb-24">
        <h2 className="font-mono text-sm text-muted uppercase tracking-wide mb-6">
          Recent entries
        </h2>
        <div className="space-y-8">
          {posts.length === 0 ? (
            <p className="text-muted font-mono text-sm">No posts yet. Check back soon.</p>
          ) : (
            posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <p className="commit-id font-mono text-xs text-muted mb-1">
                  {post.slug.slice(0, 7)} · {format(new Date(post.date), "MMM d, yyyy")}
                </p>
                <h3 className="text-xl font-semibold text-ink group-hover:text-signal transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted mt-1">{post.summary}</p>
                {post.tags.length > 0 && (
                  <div className="flex gap-2 mt-2 flex-wrap">
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
        <Link
          href="/blog"
          className="inline-block mt-10 font-mono text-sm text-signal underline underline-offset-2"
        >
          view all posts →
        </Link>
      </section>
    </div>
  );
}
