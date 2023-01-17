import { defineStore } from 'pinia'

export const useCommends = defineStore('commends', {
  state: () => {
    return {
      commends: {
        start: 'Get start work with bot',
        sayHi: "Let's talk!",
        resume: "See my resume"
      }
    }
  },

  getters: {
    showCommends: (state) => state.commends
  }
})