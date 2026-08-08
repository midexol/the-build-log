import type { Config } from "tailwindcss";

// Design tokens for a "build-log" aesthetic — the blog reads like a
// changelog of a dev journey, not a generic content site.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#EDF0F2",      // cool slate-white background, not warm cream
        panel: "#FFFFFF",      // card/panel surface
        ink: "#1B2430",        // primary text, near-navy not pure black
        muted: "#5B6472",      // secondary text
        line: "#D6DCE1",       // hairline borders/dividers
        signal: "#C97A2E",     // amber accent — used sparingly, for links/tags
        code: "#101418",       // code block background
      },
      fontFamily: {
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["Public Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "42rem",
      },
    },
  },
  plugins: [],
};
export default config;
