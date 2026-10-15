/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        surface: "var(--color-surface)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        terracotta: "var(--color-accent)",
        olive: "var(--color-olive)",
      },
      fontFamily: {
        editorial: ['"Iowan Old Style"', "Baskerville", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
