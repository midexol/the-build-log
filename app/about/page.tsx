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

function DevToIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 448 512" fill="currentColor">
      <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.06v104.47h17.41c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c.01-5.8-1.93-10.16-5.82-13.06zm-10.45 83.09h-5.8V217.4h5.8c2.9 0 4.35 2.18 4.35 6.53v63.1c0 4.35-1.45 6.53-4.35 6.53zM187.35 203.94h-39.15v104.47h39.15v-17.41h-21.74v-26.12h17.41v-17.41h-17.41v-26.12h21.74v-17.41zM244.66 203.94l-14.7 65.29-14.7-65.29h-19.18l24.47 104.47h18.82l24.47-104.47h-19.18zM315.82 203.94h-26.12v104.47h26.12c14.51 0 26.12-11.61 26.12-26.12v-52.23c0-14.51-11.61-26.12-26.12-26.12zm8.71 78.35c0 4.81-3.9 8.71-8.71 8.71h-8.71V221.35h8.71c4.81 0 8.71 3.9 8.71 8.71v52.23zM0 64v384c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64z"/>
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
    <div className="space-y-10 py-4">
      {/* Hero Feature Banner */}
      <div className="bg-ink text-paper border-2 border-ink p-8 sm:p-12 shadow-newspaper relative">
        <span className="font-mono-tag text-xs text-red font-bold uppercase tracking-widest block mb-2">
          BIOGRAPHICAL PROFILE • AUTHOR &amp; PUBLISHER
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-black mb-4 leading-none uppercase">
          Olamide Okunola
        </h1>
        <p className="font-serif text-paper-card text-lg sm:text-xl leading-relaxed max-w-2xl italic">
          &ldquo;I wear three distinct hats at my internship — data analyst, team coordinator, and software developer — and I am learning to balance all of them in public.&rdquo;
        </p>
      </div>

      {/* Three Hats Grid */}
      <div>
        <h2 className="font-display font-bold text-2xl text-ink uppercase tracking-tight mb-4 pb-2 border-b-2 border-ink">
          The Three Operational Roles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {hats.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-paper-card border border-ink p-6 rounded-xs shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xs bg-ink text-paper flex items-center justify-center mb-4">
                  <Icon size={18} />
                </div>
                <h3 className="font-display font-bold text-lg text-ink uppercase mb-2">
                  {title}
                </h3>
                <p className="font-serif text-sm text-muted leading-relaxed">
                  {desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-rule font-mono-tag text-[10px] text-red font-bold uppercase tracking-wider">
                PRIMARY DUTY
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What I actually do */}
      <div className="bg-paper-card border border-ink p-6 sm:p-8 rounded-xs shadow-xs space-y-4">
        <h2 className="font-display font-bold text-xl text-ink uppercase tracking-tight border-b border-rule pb-2">
          Core Day-to-Day Responsibilities
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-serif text-sm text-ink">
          {[
            "Write complex SQL queries to solve business intelligence challenges",
            "Automate recurring Excel data reports using Python scripts",
            "Ensure the dev team is aligned, unblocked, and shipping on schedule",
            "Document architecture and engineering lessons for team clarity",
          ].map((item) => (
            <li key={item} className="flex gap-3 bg-paper p-3 border border-rule">
              <ArrowRight size={16} className="text-red shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Why this blog */}
      <div className="bg-paper-card border border-ink p-6 sm:p-8 rounded-xs shadow-xs space-y-3">
        <h2 className="font-display font-bold text-xl text-ink uppercase tracking-tight border-b border-rule pb-2">
          Editorial Purpose of This Dispatch
        </h2>
        <p className="font-serif text-base text-ink leading-relaxed drop-cap">
          I&apos;m documenting my internship journey in real time: the wins, the failures, and the messy middle. No gatekeeping, no corporate jargon. Just honest, transparent dispatches from someone building their tech career in public.
        </p>
      </div>

      {/* Editorial Quote */}
      <div className="border-l-4 border-red bg-paper p-6 border border-ink">
        <p className="font-serif italic text-lg sm:text-xl text-ink leading-relaxed">
          &ldquo;Not the expert. Just the intern who takes detailed notes, keeps the team moving, and ships with AI as a pair programmer.&rdquo;
        </p>
      </div>

      {/* Connect */}
      <div className="border-t-2 border-ink pt-6 space-y-4">
        <h2 className="font-display font-bold text-xl text-ink uppercase tracking-tight">
          Connect &amp; Subscribe to Dispatches
        </h2>
        <div className="flex gap-3 flex-wrap font-mono-tag">
          <a
            href="https://midexol.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2 px-4 flex items-center gap-2"
          >
            <Mail size={15} /> SUBSTACK DISPATCH
          </a>
          <a
            href="https://dev.to/mide_xol"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs py-2 px-4 flex items-center gap-2"
          >
            <DevToIcon className="w-[15px] h-[15px]" /> DEV.TO
          </a>
          <a
            href="https://x.com/mide_xol"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs py-2 px-4 flex items-center gap-2"
          >
            <XIcon className="w-[15px] h-[15px]" /> @MIDE_XOL
          </a>
          <a
            href="https://www.linkedin.com/in/okunola-olamide-xielle526"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs py-2 px-4 flex items-center gap-2"
          >
            <LinkedinIcon className="w-[15px] h-[15px]" /> LINKEDIN
          </a>
        </div>
      </div>
    </div>
  );
}
