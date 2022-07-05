import { defineStore } from "pinia";

export const useError = defineStore('errors', {
  state: () => ({
    error: { code: 404, message: 'This page could not be found.' },
  }),
})