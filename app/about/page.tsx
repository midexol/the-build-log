export const metadata = {
  title: "About",
  description:
    "Olamide Okunola — data analyst, team coordinator, and developer. Documenting an internship in public.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Eyebrow */}
      <p className="font-mono text-sm text-signal mb-3">// who I am</p>
      <h1 className="font-mono text-2xl font-semibold text-ink mb-8 leading-tight">
        Olamide Okunola
        <span className="text-muted font-normal ml-3 text-lg">@mide_xol</span>
      </h1>

      {/* Hats section */}
      <div className="space-y-6 mb-12">
        <p className="text-muted text-base leading-relaxed">
          I wear three hats at my internship — and I&apos;m learning to balance all of them.
        </p>

        <div className="border-l-2 border-signal pl-5 space-y-5">
          <div>
            <p className="font-mono text-sm font-semibold text-ink mb-1">
              📊 Data Analyst
            </p>
            <p className="text-muted leading-relaxed">
              SQL and Python. Pulling insights from messy tables and turning them into answers
              that actually help the business.
            </p>
          </div>
          <div>
            <p className="font-mono text-sm font-semibold text-ink mb-1">
              🗂 Team Coordinator
            </p>
            <p className="text-muted leading-relaxed">
              Keeping my squad aligned, unblocked, and shipping. No formal PM title —
              just a lot of Slack messages and sticky notes.
            </p>
          </div>
          <div>
            <p className="font-mono text-sm font-semibold text-ink mb-1">
              💻 Developer
            </p>
            <p className="text-muted leading-relaxed">
              Shipping small features and scripts with AI as my pair programmer. Learning
              in public, one commit at a time.
            </p>
          </div>
        </div>
      </div>

      {/* What I actually do */}
      <div className="mb-12">
        <h2 className="font-mono text-sm text-muted uppercase tracking-wide mb-4">
          What I actually do
        </h2>
        <ul className="space-y-2 text-muted leading-relaxed">
          {[
            "Write SQL to answer business questions",
            "Automate Excel reports with Python",
            "Make sure my team knows what to build, when, and why",
            "Document everything so we don't make the same mistake twice",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="font-mono text-signal mt-0.5">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Why this blog */}
      <div className="mb-12">
        <h2 className="font-mono text-sm text-muted uppercase tracking-wide mb-4">
          Why this blog exists
        </h2>
        <p className="text-muted leading-relaxed">
          I&apos;m documenting my internship journey: the wins, the failures, and the messy
          middle. No gatekeeping. Just honest lessons from someone building their career
          in public.
        </p>
      </div>

      {/* Quote */}
      <blockquote className="border-l-2 border-line pl-5 mb-12">
        <p className="text-muted italic leading-relaxed">
          &ldquo;Not the expert. Just the intern who takes notes and keeps the team
          moving.&rdquo;
        </p>
      </blockquote>

      {/* Connect */}
      <div>
        <h2 className="font-mono text-sm text-muted uppercase tracking-wide mb-4">
          Let&apos;s connect
        </h2>
        <div className="flex flex-col gap-2 font-mono text-sm">
          <a
            href="https://x.com/mide_xol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-signal hover:underline underline-offset-2 transition-colors w-fit"
          >
            x.com / @mide_xol ↗
          </a>
          <a
            href="https://www.linkedin.com/in/okunola-olamide-xielle526"
            target="_blank"
            rel="noopener noreferrer"
            className="text-signal hover:underline underline-offset-2 transition-colors w-fit"
          >
            linkedin / okunola-olamide ↗
          </a>
        </div>
      </div>
    </div>
  );
}
