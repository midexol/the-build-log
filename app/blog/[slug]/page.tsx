import { notFound } from "next/navigation";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { getMDXComponents } from "@/mdx-components";
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
  // Matches the blog's dark code aesthetic
  theme: "github-dark-dimmed",
  keepBackground: true,
  onVisitLine(node) {
    // Prevent collapsing of empty lines
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
    <article className="max-w-3xl mx-auto px-6 py-16">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-block font-mono text-xs text-muted hover:text-signal transition-colors mb-10"
      >
        ← all posts
      </Link>

      {/* Eyebrow */}
      <p className="commit-id font-mono text-xs text-muted mb-3">
        {post.slug.slice(0, 7)} · {format(new Date(post.date), "MMMM d, yyyy")} ·{" "}
        {post.readingTime}
      </p>

      {/* Title */}
      <h1 className="font-mono text-2xl sm:text-3xl font-semibold text-ink mb-4 leading-tight">
        {post.title}
      </h1>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="flex gap-2 mb-10 flex-wrap">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="font-mono text-xs text-signal bg-signal/10 px-2 py-0.5 rounded hover:bg-signal/20 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="prose-post">{content}</div>

      {/* Footer nav */}
      <div className="mt-16 pt-8 border-t border-line">
        <Link
          href="/blog"
          className="font-mono text-sm text-signal underline underline-offset-2"
        >
          ← back to all posts
        </Link>
      </div>
    </article>
  );
}
