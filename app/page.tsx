import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import { BookOpen, ArrowRight } from "lucide-react";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);
  const leadPost = posts[0];
  const secondaryPosts = posts.slice(1);

  return (
    <div className="space-y-12">
      {/* ── Front Page Lead Story Hero ── */}
      <section className="border-2 border-ink bg-paper-card p-6 sm:p-10 relative overflow-hidden shadow-newspaper">
        <div className="flex items-center justify-between gap-4 mb-4 pb-2 border-b border-ink font-mono-tag text-xs text-red uppercase font-bold tracking-wider">
          <span className="flex items-center gap-1.5">
            <BookOpen size={14} />
            LEAD FEATURE ARTICLE
          </span>
          <span>SPECIAL INTERNSHIP DISPATCH</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <h1 className="font-display text-3xl sm:text-5xl font-black text-ink leading-none tracking-tight mb-5 uppercase">
              SQL, Python, and Keeping the Team Moving Forward.
            </h1>
            <p className="font-serif text-lg text-ink leading-relaxed mb-6 drop-cap">
              I&apos;m Olamide — data analyst, team coordinator, and software developer documenting an internship journey in public. Navigating SQL queries, automated Python reports, and shipping features alongside AI as a pair programmer.
            </p>
            <div className="flex gap-3 flex-wrap font-mono-tag">
              <Link href="/blog" className="btn-primary text-xs py-2 px-5 flex items-center gap-2">
                READ ALL DISPATCHES <ArrowRight size={14} />
              </Link>
              <Link href="/about" className="btn-outline text-xs py-2 px-5">
                ABOUT THE AUTHOR
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 border-l-0 lg:border-l border-ink lg:pl-6 pt-4 lg:pt-0 font-serif">
            <div className="border border-ink p-4 bg-paper mb-4">
              <h3 className="font-display font-bold text-base text-ink uppercase mb-2 border-b border-rule pb-1">
                Author&apos;s Motto
              </h3>
              <p className="italic text-sm text-muted leading-relaxed">
                &ldquo;Not the expert. Just the intern who takes detailed notes, automates repetitive tasks, and keeps the team unblocked.&rdquo;
              </p>
            </div>
            <div className="font-mono-tag text-xs text-muted space-y-1.5">
              <div className="flex justify-between border-b border-rule py-1">
                <span>REPOS LOGGED:</span>
                <span className="font-bold text-ink">30+</span>
              </div>
              <div className="flex justify-between border-b border-rule py-1">
                <span>PRIMARY STACK:</span>
                <span className="font-bold text-ink">SQL / PY / NEXT</span>
              </div>
              <div className="flex justify-between border-b border-rule py-1">
                <span>MODE:</span>
                <span className="font-bold text-red uppercase">PAIR PROGRAMMING</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Front Page Dispatches ── */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b-2 border-ink pb-2">
          <div>
            <span className="font-mono-tag text-xs text-red font-bold uppercase tracking-wider block">
              EDITORIAL SELECTION
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink uppercase tracking-tight">
              Recent Front-Page Entries
            </h2>
          </div>
          <Link
            href="/blog"
            className="font-mono-tag text-xs font-bold text-ink hover:text-red transition-colors flex items-center gap-1 uppercase tracking-wider"
          >
            VIEW ARCHIVES <ArrowRight size={13} />
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="font-serif text-muted italic">No dispatches logged yet — check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        )}
      </section>

      {/* ── Editor's Desk Strip ── */}
      <section className="bg-ink text-paper p-8 border-2 border-ink shadow-newspaper">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-mono-tag text-xs text-red font-bold uppercase tracking-widest mb-1">
              FROM THE EDITOR&apos;S DESK
            </p>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
              &ldquo;Learning in public, one commit and one query at a time.&rdquo;
            </h3>
            <p className="font-serif text-sm text-paper-card opacity-90 mt-1">
              Follow along on Substack or connect directly via social dispatches.
            </p>
          </div>
          <Link
            href="/about"
            className="btn-primary bg-paper text-ink hover:bg-red hover:text-white border-paper shrink-0 text-xs py-2.5 px-5 flex items-center gap-2 font-mono-tag uppercase"
          >
            AUTHOR PROFILE <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
