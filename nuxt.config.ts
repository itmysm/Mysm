import { defineNuxtConfig } from 'nuxt'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  vite: {
    plugins: [
      Components({
        resolvers: [
          IconsResolver({
            prefix: false,
            enabledCollections: ['akar-icons'],
          }),
        ],
      }),
      Icons({
        scale: 1.6,
        defaultStyle: '', // Style apply to icons
        defaultClass: '',
        autoInstall: true
      })
    ]
  },
  buildModules: ['@pinia/nuxt'],
})
