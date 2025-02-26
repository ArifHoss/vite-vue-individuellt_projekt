<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/authStore.js'

const route = useRoute()
const authStore = useAuthStore()

const universities = ref(null)
const name = ref(decodeURIComponent(route.query.country || ''))
const loading = ref(false)
const error = ref(false)

const fetchUniversities = async () => {
  if (!name.value.trim()) return
  loading.value = true
  error.value = false

  try {
    const encodedName = encodeURIComponent(name.value)
    const apiUrl = `http://universities.hipolabs.com/search?country=${encodedName}`

    const response = await fetch(apiUrl)

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

    universities.value = await response.json()

    // Add successful search to user history
    authStore.addSearchToHistory(name.value)
    
  } catch (err) {
    console.error('Error fetching universities:', err)
    error.value = true
  } finally {
    loading.value = false
  }
}

// Re-fetch when route query changes
watch(
  () => route.query.country,
  (newCountry) => {
    name.value = decodeURIComponent(newCountry || '')
    fetchUniversities()
  },
)

onMounted(() => {
  if (name.value) fetchUniversities()
})
</script>

<template>
  <div id="app">
    <h1 v-if="universities">Found total {{ universities.length }} Universities in {{ name }}!</h1>

    <dl v-if="universities?.length" class="universities-list">
      <template v-for="university in universities" :key="university.name">
        <div class="university-card">
          <dt class="university-name">{{ university.name }}</dt>
          <dd class="university-country">Country: {{ university.country }}</dd>
          <dd class="university-website">
            Website:
            <a :href="university.web_pages[0]" target="_blank">
              {{ university.web_pages[0] }}
            </a>
          </dd>
          <dd v-if="university['state-province']" class="university-province">
            State/Province: {{ university['state-province'] }}
          </dd>
        </div>
      </template>
    </dl>

    <p v-if="universities && universities.length === 0" class="no-results">
      No universities found for "{{ name }}". Make sure you write the country name correctly!
    </p>

    <div v-if="loading" class="loading-spinner">
      <p>Loading...</p>
    </div>

    <p v-if="error" class="error-message">Failed to load data. Please try again.</p>
  </div>
</template>

<style scoped>
.universities-list {
  margin-top: 20px;
}
.university-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
}
.university-name {
  font-weight: bold;
}
.no-results {
  color: red;
}
.loading-spinner {
  font-weight: bold;
}
.error-message {
  color: red;
}
</style>
