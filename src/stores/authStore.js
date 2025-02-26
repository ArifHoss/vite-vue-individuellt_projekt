import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('user')) || null)

  const login = async (email, password) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/users?email=${email}&password=${password}`,
      )
      if (response.data.length > 0) {
        user.value = response.data[0]
        localStorage.setItem('user', JSON.stringify(user.value))
        return true
      } else {
        user.value = null
        return false
      }
    } catch (error) {
      console.error('Login error:', error)
      user.value = null
      return false
    }
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem('user')
  }

  const addSearchToHistory = async (country) => {
    if (!user.value) return
    if (!user.value.searchedList.includes(country)) {
      user.value.searchedList.unshift(country)
      if (user.value.searchedList.length > 10) user.value.searchedList.pop()

      // Persist updated user to JSON server
      await axios.patch(`http://localhost:3000/users/${user.value.id}`, {
        searchedList: user.value.searchedList,
      })

      localStorage.setItem('user', JSON.stringify(user.value))
    }
  }

  const clearSearchHistory = async () => {
    if (!user.value) return
    user.value.searchedList = []
    await axios.patch(`http://localhost:3000/users/${user.value.id}`, {
      searchedList: [],
    })
    localStorage.setItem('user', JSON.stringify(user.value))
  }

  return { user, login, logout, addSearchToHistory, clearSearchHistory }
})
