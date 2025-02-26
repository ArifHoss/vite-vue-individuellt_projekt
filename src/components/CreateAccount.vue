<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const phone = ref('')
const errorMessage = ref('')

// Create a new user account
const createAccount = async () => {
  if (!firstName.value || !lastName.value || !email.value || !password.value || !phone.value) {
    errorMessage.value = 'All fields are required!'
    return
  }

  // Simple email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email.value)) {
    errorMessage.value = 'Invalid email format'
    return
  }

  const newUser = {
    firstName: firstName.value,
    lastName: lastName.value,
    username: email.value,
    email: email.value,
    password: password.value,
    phone: phone.value,
    profilePicUrl: null,
    favourites: [],
    searchedList: [],
  }

  try {
    await axios.post('http://localhost:3000/users', newUser)
    router.push('/login') // Redirect to login after account creation
  } catch (error) {
    errorMessage.value = 'Error creating account.'
    console.error('Error creating account:', error)
  }
}
</script>

<template>
  <div class="register-container">
    <div class="card shadow p-4">
      <h2>Create an Account 🚀</h2>

      <input v-model="firstName" type="text" placeholder="First Name" class="form-control" />
      <input v-model="lastName" type="text" placeholder="Last Name" class="form-control" />
      <input v-model="email" type="email" placeholder="Email" class="form-control" />
      <input v-model="password" type="password" placeholder="Password" class="form-control" />
      <input v-model="phone" type="text" placeholder="Phone Number" class="form-control" />

      <button @click="createAccount" class="btn btn-primary mt-3">Create Account</button>

      <p v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</p>

      <p class="mt-3">
        Already have an account?
        <RouterLink class="text-decoration-none" to="/login">Login</RouterLink>
      </p>
    </div>
  </div>
</template>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 50px auto;
}

.card {
  border-radius: 10px;
}

.form-control {
  margin-bottom: 10px;
}
</style>
