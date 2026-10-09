/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        dark: {
          950: "#070707",
          900: "#0f0f0f",
          850: "#141414",
          800: "#1a1a1a",
          700: "#262626",
          600: "#333333",
        },
      },
    },
  },
  plugins: [],
}
