/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // <--- enable class-based dark mode toggling
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
