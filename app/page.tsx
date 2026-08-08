import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-surface border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
          <span className="inline-flex items-center gap-2 tag-pill mb-6 text-sm">
            📓 Internship Journal
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-ink leading-tight tracking-tight mb-5 max-w-2xl">
            SQL, Python, and keeping the team moving.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-xl mb-8">
            I&apos;m Mide — data analyst, team coordinator, and developer at my internship.
            Documenting the wins, failures, and messy middle in public.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/blog" className="btn-primary">
              Read the blog →
            </Link>
            <Link href="/about" className="btn-outline">
              About me
            </Link>
          </div>
        </div>
      </section>

      {/* ── Recent posts ── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-ink">Recent entries</h2>
          <Link
            href="/blog"
            className="text-sm font-medium text-navy hover:text-navy-dark transition-colors"
          >
            View all →
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="text-muted">No posts yet — check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        )}
      </section>

      {/* ── About strip ── */}
      <section className="bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-blue-200 mb-1">Behind the log</p>
            <h2 className="text-xl font-bold">
              &ldquo;Not the expert. Just the intern who takes notes.&rdquo;
            </h2>
          </div>
          <Link href="/about" className="btn-outline border-white text-white hover:bg-white/10 shrink-0">
            Read my story →
          </Link>
        </div>
      </section>
    </>
  );
}
