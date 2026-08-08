import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  readingTime: string;
};

export type Post = PostMeta & {
  content: string;
};

function slugFromFilename(filename: string) {
  // filenames look like 2026-08-08-my-post-title.mdx
  return filename.replace(/\.mdx?$/, "");
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug: slugFromFilename(filename),
      title: data.title ?? "Untitled",
      date: data.date ?? "1970-01-01",
      summary: data.summary ?? "",
      tags: data.tags ?? [],
      readingTime: readingTime(content).text,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? "1970-01-01",
    summary: data.summary ?? "",
    tags: data.tags ?? [],
    readingTime: readingTime(content).text,
    content,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(slugFromFilename);
}
