/* eslint-disable quotes */
// const colors = require("tailwindcss/colors");

module.exports = {
  content: [
     './src/*.{vue,html,js}',
    './src/pages/**/*.{vue,html,js}',
    './src/components/**/*.{vue,html,js}',
  ],
  theme: {
    colors: {
      'light': {
        'primary': '#007bff',
        'secondary': '#6c757d',
        'background': '#fff',
        'text': '#212529',
      },
      'dark': {
        'primary': '#222',
        'secondary': '#6c757d',
        'background': '#000',
        'text': '#fff',
      }
    },
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
}