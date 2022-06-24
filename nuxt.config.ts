import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: [
    "~/assets/css/tailwind.css",
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  buildModules: ['@pinia/nuxt'],
})
