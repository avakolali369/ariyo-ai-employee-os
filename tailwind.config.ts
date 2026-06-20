import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-bg-default) / <alpha-value>)",
        foreground: "rgb(var(--color-text-primary) / <alpha-value>)",
        card: "rgb(var(--color-bg-elevated) / <alpha-value>)",
        muted: "rgb(var(--color-bg-subtle) / <alpha-value>)",
        border: "rgb(var(--color-border-default) / <alpha-value>)",
        primary: "rgb(var(--color-brand-primary) / <alpha-value>)",
        success: "rgb(var(--color-status-success) / <alpha-value>)",
        warning: "rgb(var(--color-status-warning) / <alpha-value>)",
        danger: "rgb(var(--color-status-danger) / <alpha-value>)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
      },
    },
  },
  plugins: [],
} satisfies Config;
