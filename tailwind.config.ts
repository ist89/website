import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712", // Very dark blue/black
        surface: {
          DEFAULT: "rgba(255, 255, 255, 0.03)", // Glass effect base
          light: "rgba(255, 255, 255, 0.08)",   // Hover state
          glass: "rgba(17, 24, 39, 0.7)",       // Darker glass
        },
        accent: {
          DEFAULT: "#6366f1", // Indigo-500
          glow: "#818cf8",    // Indigo-400
          dark: "#4338ca",    // Indigo-700
        },
        space: {
          void: "#020617",    // Slate-950
          starlight: "#f8fafc", // Slate-50
          nebula: "rgba(99, 102, 241, 0.15)", // Indigo glow
        },
        text: {
          primary: "#f8fafc",   // Slate-50
          secondary: "#94a3b8", // Slate-400
          muted: "#64748b",     // Slate-500
        },
        divider: "rgba(255, 255, 255, 0.05)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-sora)", "sans-serif"],
      },
      backgroundImage: {
        "glass-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
        "glow-conic": "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
