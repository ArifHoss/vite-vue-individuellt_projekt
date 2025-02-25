<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Form fields
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const phone = ref('')
const errorMessage = ref('')
const successMessage = ref('')

// Function to handle account creation
const createAccount = () => {
  // Basic validation
  if (!firstName.value || !lastName.value || !email.value || !password.value || !phone.value) {
    errorMessage.value = 'All fields are required!'
    return
  }

  // Email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email.value)) {
    errorMessage.value = 'Invalid email format'
    return
  }

  // Password length validation
  if (password.value.length < 4) {
    errorMessage.value = 'Password must be at least 4 characters long'
    return
  }

  // Save user data to localStorage (simple authentication)
  const newUser = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value, // In production, NEVER store plain text passwords!
    phone: phone.value,
  }

  // Get existing users from localStorage
  const existingUsers = JSON.parse(localStorage.getItem('users')) || []

  // Check if email already exists
  const emailExists = existingUsers.find((user) => user.email === email.value)
  if (emailExists) {
    errorMessage.value = 'An account with this email already exists'
    return
  }

  // Store new user in localStorage
  existingUsers.push(newUser)
  localStorage.setItem('users', JSON.stringify(existingUsers))

  // Reset form and show success message
  firstName.value = ''
  lastName.value = ''
  email.value = ''
  password.value = ''
  phone.value = ''
  errorMessage.value = ''
  successMessage.value = 'Account created successfully! Redirecting to login...'

  // Redirect to login page after 2 seconds
  setTimeout(() => {
    router.push('/login')
  }, 2000)
}
</script>

<template>
  <div class="register-container">
    <h2>Create an Account</h2>

    <input v-model="firstName" type="text" placeholder="First Name" class="form-control" />
    <input v-model="lastName" type="text" placeholder="Last Name" class="form-control" />
    <input v-model="email" type="email" placeholder="Email" class="form-control" />
    <input v-model="password" type="password" placeholder="Password" class="form-control" />
    <input v-model="phone" type="text" placeholder="Phone Number" class="form-control" />

    <button @click="createAccount" class="btn btn-primary mt-2 form-control">Create Account</button>

    <p v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</p>
    <p v-if="successMessage" class="text-success mt-2">{{ successMessage }}</p>

    <p>Already have an account?</p>
    <RouterLink class="text-primary" to="/login">Login here</RouterLink>
  </div>
</template>

<style scoped>
.register-container {
  max-width: 350px;
  margin: 50px auto;
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f8f9fa;
}
.form-control {
  margin-bottom: 10px;
}
</style>
