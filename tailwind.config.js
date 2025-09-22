/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#0B3C5D", accent: "#00A7E1" },
    },
  },
  plugins: [],
};
