<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore.js'

const authStore = useAuthStore()
const router = useRouter()
const email = ref('')
const password = ref('')
const errorMessage = ref('')

const login = async () => {
  const success = await authStore.login(email.value, password.value)
  if (success) {
    router.push('/')
  } else {
    errorMessage.value = 'Invalid email or password!'
  }
}
</script>

<template>
  <div class="login-container">
    <h2>Login</h2>
    <input v-model="email" type="email" placeholder="Email" class="form-control" />
    <input v-model="password" type="password" placeholder="Password" class="form-control" />
    <button @click="login" class="btn btn-primary mt-2 form-control">Login</button>
    <p v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</p>
    <p>Do not have an account?</p>
    <RouterLink class="btn btn-link" to="/create">Create an account</RouterLink>
  </div>
</template>

<style scoped>
.login-container {
  max-width: 300px;
  margin: 50px auto;
  text-align: center;
}
</style>
