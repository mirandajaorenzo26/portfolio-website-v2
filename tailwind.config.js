/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#282725",
        "very-dark-black": "#1C1918",
        white: "#F0F0F0",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        schabo: ["SCHABO", "cursive"],
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
