/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      elements: {
        dark: "#2B3945",
        light: "#FFFFFF",
      },
      text: {
        dark: "#FFFFFF",
        light: "#111517",
      },
      background: {
        dark: "#202C37",
        light: "#FAFAFA",
      },
      input: {
        light: "#858585",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
