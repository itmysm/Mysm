/* here we get old message from local storage and get & set new messages*/
import checkMessage from '../../utils/messages/checkNewMessage'
import formatter from '../../utils/messages/messageFormat'

import { defineStore } from 'pinia'

interface messagesStructure {
  [key: string]: any;
}

export const useMessages = defineStore('messages', {
  state: () => {
    return {
      messages: JSON.parse(localStorage.getItem('messages') || '{}') as messagesStructure
    }
  },

  getters: {
    allMessages : (state) => state.messages
  },

  actions: {
    addNewMessage (newMsg: string, from: number = 1, type: string = 'normal') {
    let status: boolean = checkMessage(newMsg) 

      if (status) {
        let message = formatter(newMsg, from, type)
        
        if (!this.$state.messages.hasOwnProperty(message.date)) {
          this.$state.messages[message.date] = []
        } // check if doesn't exist add a array
        
        this.$state.messages[message.date].push(message)  
        this.saveMessages()
      }
    },

    saveMessages () {
      localStorage.setItem('messages', JSON.stringify(this.$state.messages))
    }
  }
})