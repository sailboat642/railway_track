/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Deep blue/gray (Slate-900)
        accent: "#ea580c",  // Technical orange (Orange-600)
      }
    },
  },
  plugins: [],
}