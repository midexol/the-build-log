import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

const SITE_URL = "https://blog-black-eta-50.vercel.app";
const SITE_TITLE = "The Build Log — Mide_xol";
const SITE_DESCRIPTION =
  "Documenting an internship in public: SQL, Python, team coordination, and shipping with AI as a pair programmer. By Olamide Okunola (@mide_xol).";

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function sanitizeTag(tag: string): string {
  // DEV.to & RSS compatible: lowercase, no spaces or special characters
  return tag.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export async function GET() {
  const posts = getAllPosts();

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      
      const categoriesXml = post.tags
        .slice(0, 4)
        .map((tag) => `<category>${escapeXml(sanitizeTag(tag))}</category>`)
        .join("\n      ");

      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.summary)}</description>
      ${categoriesXml}
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate",
    },
  });
}
