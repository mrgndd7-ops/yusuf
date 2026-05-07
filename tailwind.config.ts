import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        muted: "var(--color-muted)",
        dark: "var(--color-dark)",
        accent: "var(--color-accent)",
        text: "var(--color-text)",
        "text-inv": "var(--color-text-inv)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      fontSize: {
        display: "var(--text-display)",
        h2: "var(--text-h2)",
        h3: "var(--text-h3)",
      },
    },
  },
  plugins: [],
};

export default config;
