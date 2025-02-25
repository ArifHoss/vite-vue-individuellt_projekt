<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const errorMessage = ref('')

// Hardcoded users for authentication
const users = [
  { username: 'arif@gmail.com', password: '1234' },
  { username: 'johndoe@gmail.com', password: '1234' },
]

// Handle login
const login = () => {
  // Check if the user exists in `users[]`
  const user = users.find((u) => u.username === username.value && u.password === password.value)

  if (user) {
    localStorage.setItem('user', JSON.stringify(user)) // Store user session
    router.push('/') // Redirect to home
  } else {
    errorMessage.value = 'Invalid username or password'
  }
}
</script>

<template>
  <div class="login-container">
    <h2>Login</h2>
    <input v-model="username" type="text" placeholder="Email" class="form-control" />
    <input v-model="password" type="password" placeholder="Password" class="form-control" />
    <button @click="login" class="btn btn-primary mt-2 form-control">Login</button>
    <p>Do not have an account?</p>
    <RouterLink class="bd-dark" to="/create">Create account?</RouterLink>
    <p v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
.login-container {
  max-width: 300px;
  margin: 50px auto;
  text-align: center;
}
</style>
