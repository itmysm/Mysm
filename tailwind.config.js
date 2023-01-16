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
        'primary': '#3390ec',
        'secondary': '#eeffde',
        'secondary-content': '#000',
        'link': '#3390ec',
        'info-content': '#4fae4e',
        'system': '#fff',
        'system-content': '#000',
        'client': '#eeffde',
        'client-content': '#000',
        'content-hover': 'rgba(79,174,78,0.55)',
        'element': '#3390ec',
        'element-unselect': '#fff',
        'opposite': '#000'
      },
      'dark': {
        'main-hover': '#2c2c2c',
        'main': '#212121',
        'primary': '#766ac8',
        'secondary': '#eeffde',
        'secondary-content': '#000',
        'link': '#3390ec',
        'info-content': '#ffffff88',
        'system': '#212121',
        'system-content': '#fff',
        'client': '#766ac8',
        'client-content': '#fff',
        'content-hover': 'rgba(0,0,0,0.6)',
        'element': '#fff',
        'element-unselect': '#222',
        'opposite': '#fff',
      }
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '30': '30%',
      '40': '40%',
      '70': '70%',
      '100': '100%',
      '16': '16px',
    },
    extend: {
      animation: {
        fadeOut: 'fadeOut .6s ease-in-out both',
        fadeIn: 'fadeIn .6s ease-in-out both',
      },

      keyframes: {        
        fadeOut: {
          '0%' : { transform: 'scale(1)', opacity: '100%' },
          '50%' : { transform: 'scale(1.1)', opacity: '70%' },
          '100%': { transform: 'rotate(0)', opacity: '0%'},
        },
        fadeIn: {
          '0%' : { transform: 'scale(0)', opacity: '0%' },
          '50%' : { transform: 'scale(1.1)', opacity: '70%' },
          '100%': { transform: 'rotate(1)', opacity: '100%'},
        }
      }
    },

    fontFamily: {
      main: ["Roboto", "Apple Color Emoji", "Segoe UI", 'Oxygen', 'Ubuntu', 'Cantarell', "Fira Sans", "Droid Sans",  'sans-serif'],
      persian: ['Vazirmatn', 'BlinkMacSystemFont', "Apple Color Emoji",  'sans-serif']
    }
  },

  plugins: [],
  variants: {
    extend: {
    }
  },
}