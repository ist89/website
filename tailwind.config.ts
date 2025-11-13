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
        background: "#0B1220",
        surface: {
          DEFAULT: "#0F1B2D",
          light: "#0E1626",
        },
        accent: "#3B82F6",
        text: {
          primary: "#FFFFFF",
          secondary: "#C7D2FE",
        },
        divider: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-sora)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

