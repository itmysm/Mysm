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
    './components/**/*.vue',
    './components/*.vue',
    './layouts/**/*.vue',
    './layouts/*.vue',
    './pages/*.vue',

  ],
  theme: {
    fontFamily: {
      sans: ["", 'Inter-Regular'],
      serif: ['Inter-Regular'],
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
    extend: {},
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
          primary: "#a991f7",
          secondary: "#1E293B",
          tertiary: "#283447",
          neutral: "#3d4451",
          elements: "#B0BBC7",
          background: "#0f172a",
          title: "#ffffff",
          description: "#5E6A7E",
          active: "#0EA5E9",

        },
      },
    ],
  },
};
