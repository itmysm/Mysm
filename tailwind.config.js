module.exports = {
  content: [
    //"./assets/**/*.{css}",
    //"./plugins/**/*.{js,ts}",
    //"./*.{vue,js,ts}",
    //"./nuxt.config.{js,ts}",
    './assets/**/*.css',
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    './layouts/**/*.vue',
    './layouts/*.vue',
    './*.vue',
    `pages/index.vue`,
    `pages/**/*.vue`,

  ],
  theme: {
    fontFamily: {
      sans: ["Inter", 'Libre Franklin'],
      serif: ['Inter', 'Libre Franklin'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },

      animation: {
        textGradient: 'textGradient 15s linear infinite',
        toUp: 'toUp 34s linear 3s infinite',
        toLeft: 'toLeft 34s linear infinite',
        toUpLeft: 'toUpLeft 34s linear 1s infinite',
      },

      keyframes: {

        textGradient: {
          to: {
            'background-position': '200% center;'
          }
        },

        toLeft: {
          '0%': { transform: 'translate(0px)' },
          '50%': { transform: 'translate(50px, 80px)' },
          '100%': { transform: 'translate(0px, 0px)' },
        },
        toUp: {
          '0%': { transform: 'translate(0px)' },
          '50%': { transform: 'translate(-30px, -80px)' },
          '100%': { transform: 'translate(0px, 0px)' },
        },
        toUpLeft: {
          '0%': { transform: 'translate(0px)' },
          '50%': { transform: 'translate(30px, -100px)' },
          '100%': { transform: 'translate(0px, 0px)' },
        },
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    themes: [
      {
        dark: {
          "base-100": "#1d243e",
          primary: "#0f172a",
          'primary-focus': "#000",
          'primary-content': "#ffffff",

          secondary: "#1E293B",
          'secondary-focus': "#2a3446",
          'secondary-content': "#ffffff",

          accent: "#2a3347",
          'accent-focus': "#3d4451",
          'neutral': "#94a3b8",
          'neutral-focus': "#cbd5e1",
          'neutral-content': "#fff",
          title: "#ffffff",
          description: "#5E6A7E",
          background: "#0f172a",
          "info": "#38bdf8",
          "info-content": "#0EA5E9",
        },
      },
    ],
  },
};
