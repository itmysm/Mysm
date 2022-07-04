/* 
type icon id's: 
0 : success
1 : error
2 : info
3 : warning
4 : other
*/

import { defineStore } from "pinia";

export const useAlerts = defineStore('alerts', {
  state: () => ({
    alerts: [],
  }),

  getters: {
    getAlerts: (state) => state.alerts
  },
  actions: {
    addNewAlert(title, description, type, icon = 0) {
      switch (type) {
        case 'success':
          icon = 0
          break;
        case 'error':
          icon = 1
          break;
        case 'info':
          icon = 2
          break;
        case 'warning':
          icon = 3
          break;
        case 'other':
          icon = 4
          break;
      }

      this.alerts.push({ title: title, description: description, type: type, icon: 1 })
      console.log(this.alerts);
    }
  }
})