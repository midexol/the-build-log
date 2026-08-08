import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        canvas: "#F8FAFC",      // page background — cool light gray
        surface: "#FFFFFF",     // card / panel surface
        // Typography
        ink: "#0F172A",         // primary text — near black
        muted: "#64748B",       // secondary text — slate
        subtle: "#94A3B8",      // tertiary — lighter slate
        // Accent — single colour used everywhere
        navy: {
          DEFAULT: "#1E3A8A",   // slate navy accent
          light: "#EFF3FF",     // tint for pill backgrounds
          mid: "#3B5FBF",       // hover state
          dark: "#172D6E",      // pressed / deep
        },
        // Borders & lines
        border: "#E2E8F0",      // hairline borders
        // Code
        "code-bg": "#1E293B",   // dark slate for code blocks
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0,0,0,0.07), 0 1px 2px -1px rgba(0,0,0,0.05)",
        "card-hover": "0 4px 12px 0 rgba(30,58,138,0.12), 0 2px 4px -1px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};
export default config;
