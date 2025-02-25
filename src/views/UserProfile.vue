<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = ref(null)

// Fetch user info from localStorage
onMounted(() => {
  const storedUser = localStorage.getItem('user')
  if (storedUser) {
    user.value = JSON.parse(storedUser)
  } else {
    router.push('/login') // Redirect to login if no user is logged in
  }
})

// Logout function
// const logout = () => {
//   localStorage.removeItem('user') // Remove user data
//   user.value = null
//   router.push('/login') // Redirect to login
// }
</script>

<template>
  <div class="profile-container" v-if="user">
    <h2>User Profile</h2>
    <p><strong>Email:</strong> {{ user.username }}</p>
    <!-- <button @click="logout" class="btn btn-danger">Logout</button> -->
  </div>

  <!-- <div v-else class="profile-container">
    <h2>Redirecting to login...</h2>
  </div> -->
</template>

<style scoped>
.profile-container {
  max-width: 400px;
  margin: 50px auto;
  text-align: center;
}
</style>
