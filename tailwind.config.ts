import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        "bg-2": "var(--color-bg-2)",
        surface: "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        border: "var(--color-border)",
        muted: "var(--color-muted)",
        "muted-2": "var(--color-muted-2)",
        dark: "var(--color-dark)",
        accent: "var(--color-accent)",
        "accent-2": "var(--color-accent-2)",
        text: "var(--color-text)",
        "text-soft": "var(--color-text-soft)",
        "text-inv": "var(--color-text-inv)",
        cream: "var(--color-cream)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      fontSize: {
        display: "var(--text-display)",
        h1: "var(--text-h1)",
        h2: "var(--text-h2)",
        h3: "var(--text-h3)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        glow: "var(--shadow-glow)",
        card: "var(--shadow-card)",
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
