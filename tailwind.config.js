module.exports = {
  content: [
    './layouts/**/*.vue',
    './layouts/*.vue',
    '*.vue',
    './pages/**/*.vue',
    './pages/blog/index.vue',
    './pages/*.vue',
    './assets/**/*.css',
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary-background': '#ffffff',
      'white': '#ffffff',
      'dark': '#0f172a',
      'midnight': '#fff',
      'metal': '#ffff',
      'tahiti': '#64748b',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
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
          'secondary-focus': "#1E293B",
          'secondary-content': "#ffffff",
          accent: "#2a3347",
          'accent-focus': "#3d4451",
          'accent-content': "#64748b",
          neutral: "#94a3b8",
          'neutral-focus': "#cbd5e1",
          'neutral-content': "#fff",
          title: "#ffffff",
          description: "#5E6A7E",
          background: "#0f172a",
          "info": "#38bdf8",
          "info-content": "#0EA5E9",
        },
        light: {
          primary: "#ffff",
          'primary-focus': "#000",
          'primary-content': "#0f172a",
          secondary: "#f6fbff",
          'secondary-focus': "#fff",
          'secondary-content': "#fff",
          accent: "#fff",
          'accent-focus': "#fff",
          'accent-content': "#0f172a",
          neutral: "#94a3b8",
          'neutral-focus': "#cbd5e1",
          'neutral-content': "#475569",
          'base-100': "#fff",
          'base-200': "#fff",
          'base-300': "#fff",
          'base-content': "#fff",
          "info": "#0EA5E9",
          "info-content": "#1161d9",
          //success: "#fff",
          //'success-content': "#fff",
          //warning: "#fff",
          //'warning-content': "#fff",
          //error: "#fff",
          //'error-content': "#fff",
          'bubble-gum': '#2222',
        },
      },
    ],
  },
};

