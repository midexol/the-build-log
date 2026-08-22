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
        paper: "#F7F5F0",
        "paper-card": "#EFEBE2",
        canvas: "#F7F5F0",
        surface: "#EFEBE2",
        // Typography
        ink: {
          DEFAULT: "#111111",
          muted: "#6B6660",
          subtle: "#8C867D",
        },
        muted: "#6B6660",
        subtle: "#8C867D",
        // Accents
        red: {
          DEFAULT: "#C81C1C",
          dark: "#9E1414",
          light: "rgba(200, 28, 28, 0.08)",
        },
        navy: {
          DEFAULT: "#C81C1C",
          light: "#F5EBE6",
          mid: "#A81818",
          dark: "#800F0F",
        },
        // Borders & lines
        rule: {
          DEFAULT: "#D3CDBF",
          dark: "#111111",
        },
        border: "#D3CDBF",
        // Code
        "code-bg": "#1A1917",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        serif: ["Source Serif 4", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "Courier New", "monospace"],
        sans: ["Source Serif 4", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(17,17,17,0.06)",
        "card-hover": "0 6px 16px 0 rgba(17,17,17,0.12)",
        newspaper: "2px 2px 0px 0px #111111",
      },
      borderRadius: {
        card: "4px",
      },
    },
  },
  plugins: [],
};
export default config;
