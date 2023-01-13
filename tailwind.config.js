/* eslint-disable quotes */
// const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/components/**/*.{vue,js}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/pages/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/*.vue"
  ],
  theme: {
    extend: {},

    fontFamily: {
      sans: ["Inter", 'Work Sans'],
      serif: ['Inter', 'Work Sans'],
      persian: ['Vazirmatn']
    }
  },
  plugins: [],
  variants: {
    extend: {}
  },

  daisyui: {
    styled: true,
  }
}
