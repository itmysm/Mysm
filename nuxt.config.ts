import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  buildModules: ['@pinia/nuxt'],
})
