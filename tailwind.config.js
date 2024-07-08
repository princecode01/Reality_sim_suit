/* eslint-disable no-undef */
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#FF7D29",
        hover:"#E9C46A",
        dark: "#6F4E37",
        light: "#FED8B1",
        lightRed: "#ECB176",
        red: "#A67B5B",
      },
      fontFamily: {
        reddit: ["Reddit Mono", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
