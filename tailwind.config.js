/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './*/*.html',
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

