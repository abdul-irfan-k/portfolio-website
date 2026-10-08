import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.04em" }],
      sm: ["0.875rem", { lineHeight: "1.45", letterSpacing: "0.01em" }],
      base: ["1rem", { lineHeight: "1.55", letterSpacing: "-0.01em" }],
      lg: ["1.125rem", { lineHeight: "1.55", letterSpacing: "-0.012em" }],
      xl: ["1.25rem", { lineHeight: "1.45", letterSpacing: "-0.015em" }],
      "2xl": ["1.5rem", { lineHeight: "1.35", letterSpacing: "-0.018em" }],
      "3xl": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      "4xl": ["2.25rem", { lineHeight: "1.15", letterSpacing: "0" }],
      "5xl": ["3rem", { lineHeight: "1.05", letterSpacing: "0" }],
      "6xl": ["3.75rem", { lineHeight: "1.02", letterSpacing: "0" }],
      "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.005em" }],
      "8xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.01em" }],
      "9xl": ["8rem", { lineHeight: "1", letterSpacing: "-0.015em" }],
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter-tight)", "var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "rgb(28, 29, 32)",
        white: "#fff",
        blackprimary: "#1C1D20",
        blacksecondary: "#141516",
        blueprimary: "#334BD3",
        bluesecondary: "#455CE9",
      },
    },
  },
  plugins: [],
};
export default config;
