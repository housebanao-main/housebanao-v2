/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        xs: ["0.9rem", { lineHeight: "1.35rem" }],
        sm: ["1rem", { lineHeight: "1.5rem" }],
        base: ["1.125rem", { lineHeight: "1.75rem" }],
        lg: ["1.3rem", { lineHeight: "1.95rem" }],
        xl: ["1.5rem", { lineHeight: "2.1rem" }],
        "2xl": ["1.85rem", { lineHeight: "2.35rem" }],
        "3xl": ["2.25rem", { lineHeight: "2.75rem" }],
        "4xl": ["2.75rem", { lineHeight: "3.25rem" }],
        "5xl": ["3.6rem", { lineHeight: "1" }],
        "6xl": ["4.4rem", { lineHeight: "1" }],
        "7xl": ["5.2rem", { lineHeight: "1" }],
        "8xl": ["6.6rem", { lineHeight: "1" }],
        "9xl": ["8.5rem", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};
