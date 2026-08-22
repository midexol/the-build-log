import { notFound } from "next/navigation";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import { getPostBySlug, getAllSlugs, getAdjacentPosts } from "@/lib/posts";
import { getMDXComponents } from "@/mdx-components";
import { ShareButtons } from "@/components/ShareButtons";
import { PostNavigation } from "@/components/PostNavigation";
import { Comments } from "@/components/Comments";
import rehypePrettyCode from "rehype-pretty-code";
import type { Metadata } from "next";
import type { Options } from "rehype-pretty-code";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.summary,
      creator: "@mide_xol",
    },
  };
}

const prettyCodeOptions: Options = {
  theme: "github-dark-dimmed",
  keepBackground: true,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className = [
      ...(node.properties.className ?? []),
      "line--highlighted",
    ];
  },
  onVisitHighlightedChars(node) {
    node.properties.className = ["word--highlighted"];
  },
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { prev, next } = getAdjacentPosts(slug);
  const postUrl = `https://blog-black-eta-50.vercel.app/blog/${post.slug}`;

  const { content } = await compileMDX({
    source: post.content,
    components: getMDXComponents(),
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
      },
    },
  });

  return (
    <div className="max-w-4xl mx-auto py-4">
      {/* Back button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 font-mono-tag text-xs font-bold text-ink hover:text-red transition-colors mb-6 uppercase tracking-wider"
      >
        ← RETURN TO ARCHIVES
      </Link>

      <article className="bg-paper-card border-2 border-ink p-6 sm:p-10 shadow-newspaper">
        {/* Newspaper Category Pills & Issue Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-ink font-mono-tag text-xs">
          {post.tags.length > 0 && (
            <div className="flex gap-1.5 flex-wrap">
              {post.tags.map((tag) => (
                <Link key={tag} href={`/blog?tag=${tag}`} className="tag-pill text-[10px]">
                  {tag}
                </Link>
              ))}
            </div>
          )}
          <span className="text-red font-bold uppercase tracking-wider">
            OFFICIAL EDITORIAL DISPATCH
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display font-black text-3xl sm:text-5xl text-ink leading-tight tracking-tight mb-4 uppercase">
          {post.title}
        </h1>

        {/* Vintage Double Rule Meta Bar */}
        <div className="py-2.5 my-6 border-t-2 border-b-2 border-ink flex flex-wrap items-center justify-between gap-3 font-mono-tag text-xs text-muted uppercase">
          <div>
            BYLINE: <span className="font-bold text-ink">OLAMIDE OKUNOLA</span>
          </div>
          <div className="flex items-center gap-3">
            <span>{format(new Date(post.date), "MMMM d, yyyy").toUpperCase()}</span>
            <span>•</span>
            <span className="font-bold text-red">{post.readingTime.toUpperCase()}</span>
          </div>
        </div>

        {/* Summary Excerpt Lead */}
        {post.summary && (
          <p className="font-serif italic text-lg text-ink leading-relaxed mb-8 p-4 border-l-4 border-red bg-paper">
            &ldquo;{post.summary}&rdquo;
          </p>
        )}

        {/* MDX content with drop cap */}
        <div className="prose-post drop-cap max-w-none">{content}</div>

        {/* Share buttons */}
        <div className="mt-12 pt-6 border-t border-ink">
          <ShareButtons title={post.title} url={postUrl} />
        </div>

        {/* Comments Section */}
        <Comments slug={post.slug} />

        {/* Previous / Next Post Navigation */}
        <PostNavigation prev={prev} next={next} />

        {/* Back to all posts */}
        <div className="mt-10 pt-6 border-t-2 border-ink flex items-center justify-between font-mono-tag text-xs">
          <Link
            href="/blog"
            className="font-bold text-ink hover:text-red transition-colors uppercase tracking-wider"
          >
            ← BACK TO ARCHIVES INDEX
          </Link>
        </div>
      </article>
    </div>
  );
}


