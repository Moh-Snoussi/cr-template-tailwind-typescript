const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      auto: "auto",
      n2: -2,
      n1: -1,
      0: 0,
      1: 1,
      2: 2,
    },
    linearGradientColors: (theme) => theme("colors"),
    radialGradientColors: (theme) => theme("colors"),
    conicGradientColors: (theme) => theme("colors"),
    linearBorderGradients: (theme) => ({
      colors: theme("colors"),
    }),
    colors: {
      primary: "#845EC2",
      secondary: "#4B4453",
      black: "#2a2a2e",
      blackLighter: "#38383d",
      blueFire: "#007de6",
      blueAis: "#3237a7",
      accent: "#B0A8B9",
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-elevation")(["responsive"]),
    require("tailwindcss-gradients"),
    require("tailwindcss-border-gradients")(),
    require("tailwindcss-debug-screens"),
    require('tailwindcss-scroll-snap'),
  ],
};
