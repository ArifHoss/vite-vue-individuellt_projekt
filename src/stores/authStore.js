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

  return { user, login, logout }
})
