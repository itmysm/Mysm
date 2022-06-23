// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      themes: {
        light: {
          primary: '#0EA5E9',
          secondary: '#1E293B',
          gray: '#64748B',
          description: '#334155',
          'tertiary': '#2d4358',
          'light': '#e9ecf1',
          'lighter': '#EAEDF1',
          'main': '#0F172A',
          'background': '#ffffff'
        },

        dark: {
          primary: '#0EA5E9',
          secondary: '#1e293b',
          gray: '#283447',
          description: '#94A3B8',
          'tertiary': '#283447',
          'light': '#e9ecf1',
          'lighter': '#EAEDF1',
          'main': '#fff',
          'background': '#0F172A',
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
