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
        xs: ["0.875rem", { lineHeight: "1.25rem" }],
        sm: ["1rem", { lineHeight: "1.5rem" }],
        base: ["1.125rem", { lineHeight: "1.75rem" }],
        lg: ["1.3rem", { lineHeight: "1.9rem" }],
        xl: ["1.5rem", { lineHeight: "2rem" }],
        "2xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "3xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "4xl": ["2.75rem", { lineHeight: "3rem" }],
        "5xl": ["3.5rem", { lineHeight: "1" }],
        "6xl": ["4.25rem", { lineHeight: "1" }],
        "7xl": ["5rem", { lineHeight: "1" }],
        "8xl": ["6.5rem", { lineHeight: "1" }],
        "9xl": ["8.5rem", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};
