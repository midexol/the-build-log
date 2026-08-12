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
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Back */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-navy transition-colors mb-10"
      >
        ← All posts
      </Link>

      <article className="max-w-2xl">
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-5">
            {post.tags.map((tag) => (
              <Link key={tag} href={`/blog?tag=${tag}`} className="tag-pill">
                {tag}
              </Link>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-ink leading-tight tracking-tight mb-4">
          {post.title}
        </h1>

        {/* Meta row */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted mb-10 pb-6 border-b border-border">
          <div className="flex items-center gap-3">
            <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
            <span className="text-border">·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>

        {/* MDX content */}
        <div className="prose-post">{content}</div>

        {/* Share buttons */}
        <div className="mt-12 pt-6 border-t border-slate-200">
          <ShareButtons title={post.title} url={postUrl} />
        </div>

        {/* Comments Section */}
        <Comments slug={post.slug} />

        {/* Previous / Next Post Navigation */}
        <PostNavigation prev={prev} next={next} />

        {/* Back to all posts */}
        <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
          <Link
            href="/blog"
            className="text-sm font-medium text-navy hover:text-navy-dark transition-colors"
          >
            ← Back to all posts
          </Link>
        </div>
      </article>
    </div>
  );
}


