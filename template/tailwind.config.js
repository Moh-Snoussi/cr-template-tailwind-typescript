module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      primary: "#845EC2",
      secondary: "#4B4453",
      black: "#2a2a2e",
      blackLighter: "#38383d",
      blueFire: "#007de6",
      blueAis: "#3237a7",
      accent: "#B0A8B9"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
