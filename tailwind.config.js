module.exports = {
  mode: "jit",
  content: [
    //"./assets/**/*.{css}",
    //"./components/*.{vue,js}",
    //"./components/**/*.{vue,js}",
    //"./pages/*.vue",
    //"./pages/**/*.vue",
    //"./plugins/**/*.{js,ts}",
    //"./*.{vue,js,ts}",
    //"./nuxt.config.{js,ts}",
    './assets/**/*.css',
    './components/common/*.vue',
    './components/*.vue',
    './layouts/**/*.vue',
    './layouts/*.vue',
    './pages/**/*.vue',
    './pages/*.vue',

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
      }
    }
  },
  variants: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        right: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100px)' }
        }
      },

      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        right: 'right 1s ease-in-out 5s infinite',
      }
    },
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
