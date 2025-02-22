import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    selectedLanguage: localStorage.getItem('selectedLanguage') || 'EN',
  }),
  actions: {
    changeLanguage(lang) {
      this.selectedLanguage = lang
      localStorage.setItem('selectedLanguage', lang)
    },
  },
})
