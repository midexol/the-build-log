import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts } from "@/lib/posts";
import { format } from "date-fns";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `#${tag}`,
    description: `All posts tagged #${tag} on The Build Log.`,
  };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  const tags = new Set(posts.flatMap((p) => p.tags));
  return Array.from(tags).map((tag) => ({ tag }));
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const allPosts = getAllPosts();
  const posts = allPosts.filter((p) => p.tags.includes(tag));

  if (posts.length === 0) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/blog"
        className="inline-block font-mono text-xs text-muted hover:text-signal transition-colors mb-10"
      >
        ← all posts
      </Link>

      <p className="font-mono text-sm text-signal mb-2">// filtered by tag</p>
      <h1 className="font-mono text-2xl font-semibold text-ink mb-2">
        #{tag}
      </h1>
      <p className="text-muted mb-12">
        {posts.length} post{posts.length !== 1 ? "s" : ""}
      </p>

      <div className="divide-y divide-line">
        {posts.map((post) => (
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
          </Link>
        ))}
      </div>
    </div>
  );
}
