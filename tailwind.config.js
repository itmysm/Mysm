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
        'main': '#fff',
        'main-hover': '#f4f4f5',
        'secondary': '#eeffde',
        'secondary-content': '#000',
        'link': '#3390ec',
        'info-content': '#4fae4e',
        'system': '#fff',
        'system-content': '#000',
        'client': '#eeffde',
        'client-content': '#000',
        'content-hover': 'rgba(79,174,78,0.55)'
      },
      'dark': {
        'main': '#212121',
        'main-hover': '#2c2c2c',
        'secondary': '#eeffde',
        'secondary-content': '#000',
        'link': '#3390ec',
        'info-content': '#ffffff88',
        'system': '#212121',
        'system-content': '#fff',
        'client': '#766ac8',
        'client-content': '#fff',
        'content-hover': 'rgba(0,0,0,0.6)'
      }
    },
    extend: {},

    fontFamily: {
      main: ["Roboto", "Apple Color Emoji", "Segoe UI", 'Oxygen', 'Ubuntu', 'Cantarell', "Fira Sans", "Droid Sans",  'sans-serif'],
      persian: ['Vazirmatn', 'BlinkMacSystemFont', "Apple Color Emoji",  'sans-serif']
    }
  },

  plugins: [],
  variants: {
    extend: {}
  },
}