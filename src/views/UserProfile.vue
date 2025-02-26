<script setup>
import { useAuthStore } from '@/stores/authStore.js'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const authStore = useAuthStore()
const router = useRouter()

onMounted(() => {
  if (!authStore.user) router.push('/login')
})
</script>

<template>
  <div v-if="authStore.user" class="profile-container card shadow">
    <div class="card-body">
      <h2 class="card-title mb-4">
        👤 {{ authStore.user.firstName }} {{ authStore.user.lastName }}
      </h2>
      <p class="card-text"><strong>Email:</strong> {{ authStore.user.email }}</p>
      <p class="card-text"><strong>Phone:</strong> {{ authStore.user.phone }}</p>

      <div class="mt-4">
        <h4 class="text-primary">⭐ Favourites</h4>
        <ul class="list-group list-group-flush">
          <li v-for="uni in authStore.user.favourites" :key="uni" class="list-group-item">
            {{ uni }}
          </li>
          <li v-if="!authStore.user.favourites.length" class="list-group-item text-muted">
            No favourites added yet.
          </li>
        </ul>
      </div>

      <div class="mt-4">
        <h4 class="text-success">🌎 Recently Searched Countries</h4>
        <ul class="list-group list-group-flush">
          <li v-for="country in authStore.user.searchedList" :key="country" class="list-group-item">
            {{ country }}
          </li>
          <li v-if="!authStore.user.searchedList.length" class="list-group-item text-muted">
            No recent searches.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  max-width: 500px;
  margin: 60px auto;
  padding: 20px;
  border-radius: 15px;
  background-color: #ffffff;
}

.card-title {
  font-size: 1.8rem;
  color: #343a40;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 10px;
}

.list-group-item {
  background-color: #f8f9fa;
  border-radius: 5px;
  margin-bottom: 5px;
}

.list-group-item.text-muted {
  font-style: italic;
}
</style>
