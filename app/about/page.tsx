import { BarChart2, ClipboardList, Code2, Mail, Twitter, Linkedin, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About",
  description:
    "Olamide Okunola — data analyst, team coordinator, and developer. Documenting an internship in public.",
};

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
            <Twitter size={15} /> @mide_xol
          </a>
          <a
            href="https://www.linkedin.com/in/okunola-olamide-xielle526"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
