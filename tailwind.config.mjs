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
        xs: ["1.05rem", { lineHeight: "1.5rem" }],
        sm: ["1.2rem", { lineHeight: "1.75rem" }],
        base: ["1.35rem", { lineHeight: "2rem" }],
        lg: ["1.6rem", { lineHeight: "2.25rem" }],
        xl: ["1.85rem", { lineHeight: "2.5rem" }],
        "2xl": ["2.25rem", { lineHeight: "2.75rem" }],
        "3xl": ["2.75rem", { lineHeight: "3.25rem" }],
        "4xl": ["3.4rem", { lineHeight: "3.75rem" }],
        "5xl": ["4.4rem", { lineHeight: "1" }],
        "6xl": ["5.4rem", { lineHeight: "1" }],
        "7xl": ["6.4rem", { lineHeight: "1" }],
        "8xl": ["8.2rem", { lineHeight: "1" }],
        "9xl": ["10.5rem", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};
