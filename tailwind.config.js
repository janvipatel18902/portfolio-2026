/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
    neonGreen: "#39ff14",
    neonPurple: "#c77dff",
    neonYellow: "#faff00",
    darkBg: "#0a0a0a",
      },
    },
  },
  plugins: [],
};
