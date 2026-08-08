import { BarChart2, ClipboardList, Code2, Mail, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About",
  description:
    "Olamide Okunola — data analyst, team coordinator, and developer. Documenting an internship in public.",
};

function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z" />
    </svg>
  );
}

const hats = [
  {
    icon: BarChart2,
    title: "Data Analyst",
    desc: "SQL and Python. Pulling insights from messy tables and turning them into answers that actually help the business.",
  },
  {
    icon: ClipboardList,
    title: "Team Coordinator",
    desc: "Keeping my squad aligned, unblocked, and shipping. No formal PM title — just a lot of Slack messages and sticky notes.",
  },
  {
    icon: Code2,
    title: "Developer",
    desc: "Shipping small features and scripts with AI as my pair programmer. Learning in public, one commit at a time.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero banner */}
      <div className="bg-navy rounded-card p-8 sm:p-12 text-white mb-10">
        <p className="text-blue-200 text-sm font-medium mb-2">@mide_xol</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          Olamide Okunola
        </h1>
        <p className="text-blue-100 text-lg leading-relaxed max-w-xl">
          I wear three hats at my internship and I&apos;m learning to balance all of them
          — in public.
        </p>
      </div>

      {/* Three hats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        {hats.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-surface border border-border rounded-card p-6 shadow-card"
          >
            <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center mb-4">
              <Icon size={20} className="text-navy" />
            </div>
            <h2 className="font-bold text-ink mb-2">{title}</h2>
            <p className="text-sm text-muted leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* What I actually do */}
      <div className="bg-surface border border-border rounded-card p-6 sm:p-8 shadow-card mb-8">
        <h2 className="font-bold text-ink text-lg mb-4">What I actually do</h2>
        <ul className="space-y-3">
          {[
            "Write SQL to answer business questions",
            "Automate Excel reports with Python",
            "Make sure my team knows what to build, when, and why",
            "Document everything so we don't make the same mistake twice",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-muted">
              <ArrowRight size={16} className="text-navy shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Why this blog */}
      <div className="bg-surface border border-border rounded-card p-6 sm:p-8 shadow-card mb-8">
        <h2 className="font-bold text-ink text-lg mb-3">Why this blog exists</h2>
        <p className="text-muted leading-relaxed">
          I&apos;m documenting my internship journey: the wins, the failures, and the
          messy middle. No gatekeeping. Just honest lessons from someone building
          their career in public.
        </p>
      </div>

      {/* Quote */}
      <div className="border-l-4 border-navy pl-5 mb-10">
        <p className="text-ink italic text-lg leading-relaxed">
          &ldquo;Not the expert. Just the intern who takes notes and keeps the team
          moving.&rdquo;
        </p>
      </div>

      {/* Connect */}
      <div>
        <h2 className="font-bold text-ink text-lg mb-4">Let&apos;s connect</h2>
        <div className="flex gap-3 flex-wrap">
          <a
            href="https://midexol.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            <Mail size={15} /> Subscribe on Substack
          </a>
          <a
            href="https://x.com/mide_xol"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2"
          >
            <XIcon className="w-[15px] h-[15px]" /> @mide_xol
          </a>
          <a
            href="https://www.linkedin.com/in/okunola-olamide-xielle526"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2"
          >
            <LinkedinIcon className="w-[15px] h-[15px]" /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
