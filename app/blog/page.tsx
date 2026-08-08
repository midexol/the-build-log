import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import TagFilter from "@/components/TagFilter";

export const metadata = {
  title: "Posts",
  description: "All entries from The Build Log — Mide_xol's internship journal.",
};

export default function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const allPosts = getAllPosts();
  const allTags = Array.from(new Set(allPosts.flatMap((p) => p.tags))).sort();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-ink mb-1">All entries</h1>
        <p className="text-muted">
          {allPosts.length} post{allPosts.length !== 1 ? "s" : ""} and counting.
        </p>
      </div>

      {/* Tag filter pills */}
      {allTags.length > 0 && (
        <div className="mb-8">
          <TagFilter tags={allTags} />
        </div>
      )}

      {/* Divider */}
      <hr className="divider mb-8" />

      {/* Grid — filtered client-side via URL param, handled in TagFilter */}
      <PostGrid allPosts={allPosts} searchParams={searchParams} />
    </div>
  );
}

async function PostGrid({
  allPosts,
  searchParams,
}: {
  allPosts: ReturnType<typeof getAllPosts>;
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const posts = tag ? allPosts.filter((p) => p.tags.includes(tag)) : allPosts;

  if (posts.length === 0) {
    return (
      <p className="text-muted py-12 text-center">
        No posts tagged &ldquo;{tag}&rdquo; yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {posts.map((post, i) => (
        <PostCard key={post.slug} post={post} index={i} />
      ))}
    </div>
  );
}
