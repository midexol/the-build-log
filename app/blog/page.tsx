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
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="border-b-2 border-ink pb-6">
        <span className="font-mono-tag text-xs text-red font-bold uppercase tracking-widest block mb-1">
          CHRONOLOGICAL DISPATCHES
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-black text-ink uppercase tracking-tight mb-2">
          The Newspaper Archives
        </h1>
        <p className="font-serif text-muted text-base">
          Complete catalog of {allPosts.length} published edition{allPosts.length !== 1 ? "s" : ""} documenting code, data analytics, and shipping notes.
        </p>
      </div>

      {/* Tag filter pills */}
      {allTags.length > 0 && (
        <div className="bg-paper-card p-4 border border-ink rounded-xs">
          <span className="font-mono-tag text-[11px] font-bold text-ink uppercase tracking-wider block mb-2">
            FILTER BY TOPIC SECTION:
          </span>
          <TagFilter tags={allTags} />
        </div>
      )}

      {/* Divider */}
      <div className="border-b border-ink" />

      {/* Grid */}
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
      <div className="p-12 text-center bg-paper-card border border-dashed border-ink rounded-xs font-serif">
        <p className="text-ink font-bold text-lg">No dispatches found in topic &ldquo;{tag}&rdquo;</p>
        <p className="text-muted text-sm mt-1">Try selecting another topic filter above.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, i) => (
        <PostCard key={post.slug} post={post} index={i} />
      ))}
    </div>
  );
}
