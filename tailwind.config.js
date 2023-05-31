/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#282725",
        white: "#F0F0F0",
      },
      fontFamily: {
        instrument: ["Instrument Sans", "sans-serif"],
        schabo: ["SCHABO", "cursive"],
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
