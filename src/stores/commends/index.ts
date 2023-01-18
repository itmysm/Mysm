import { defineStore } from 'pinia'

interface commendsType {
  [key: string]: any;
}

export const useCommends = defineStore('commends', {
  state: () => {
    return {
      commends: {
        start: 'Get start work with bot',
        sayHi: "Let's talk!",
        resume: "See my resume"
      } as commendsType
    }
  },

  getters: {
    showCommends: (state) => state.commends
  },

  actions: {
    filterCommends(key: string) {
      const objs = {} as commendsType // defined a object
      if (key.length > 0 && key[0] == '/') { /* check length > 0  AND If there is "/" at the beginning of the text, continue */

        Object.keys(this.commends).filter(commend => { /* split objects and matching for similar commands based on text-input */
          if (commend.match(key.slice(1))?.input) {
            objs[commend] = this.commends[commend]
          }
        })

        return objs // 
      } else if (key.length < 1) {
        return this.showCommends // return all commends if input is empty
      }
    },
  }
})