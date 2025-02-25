<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useSearch } from '@/composables/useSearch.js'
import DropdownMenu from './DropdownMenu.vue'
import { translations } from '@/stores/translations.js'

const { searchQuery, showSuggestions, filteredCountries, selectSuggestion, performSearch } =
  useSearch()
const router = useRouter()
const selectedLanguage = ref(localStorage.getItem('selectedLanguage') || 'EN')
const user = ref(null)

//  Make `user` reactive to `localStorage` changes
watchEffect(() => {
  const storedUser = localStorage.getItem('user')
  user.value = storedUser ? JSON.parse(storedUser) : null
})

// Logout function to clear user and redirect
const logout = () => {
  localStorage.removeItem('user')
  user.value = null
  router.push('/login')
}

//  Change language function
const changeLanguage = (lang) => {
  selectedLanguage.value = lang
  localStorage.setItem('selectedLanguage', lang)
}

const t = computed(() => translations[selectedLanguage.value])

//  Dynamically update dropdown items based on login status
const userItems = computed(() => (user.value ? ['Profile', 'Logout'] : ['Login']))
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">{{ t.home }}</RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav-collapse"
        aria-controls="nav-collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="nav-collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">{{ t.about }}</RouterLink>
          </li>
        </ul>

        <div class="search-container mx-auto">
          <form class="d-flex search-box" @submit.prevent="performSearch">
            <input
              v-model="searchQuery"
              @focus="showSuggestions = true"
              @blur="setTimeout(() => (showSuggestions = false), 200)"
              class="form-control me-2"
              type="search"
              placeholder="Enter Country"
              aria-label="Search"
            />
            <button class="btn btn-outline-light" type="submit">{{ t.search }}</button>
          </form>

          <!-- Search Suggestions Dropdown -->
          <ul v-if="showSuggestions && filteredCountries.length" class="suggestions-list">
            <li
              v-for="(country, index) in filteredCountries"
              :key="index"
              @click="selectSuggestion(country)"
              class="suggestion-item"
            >
              {{ country }}
            </li>
          </ul>
        </div>

        <ul class="navbar-nav">
          <!-- Language Dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="langDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ selectedLanguage }}
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="langDropdown">
              <li>
                <a class="dropdown-item" href="#" @click.prevent="changeLanguage('EN')">English</a>
              </li>
              <li>
                <a class="dropdown-item" href="#" @click.prevent="changeLanguage('ES')">Español</a>
              </li>
              <li>
                <a class="dropdown-item" href="#" @click.prevent="changeLanguage('RU')">Русский</a>
              </li>
              <li>
                <a class="dropdown-item" href="#" @click.prevent="changeLanguage('AR')">فارسی</a>
              </li>
            </ul>
          </li>

          <!--  Dynamic User Dropdown -->
          <DropdownMenu title="User" id="userDropdown" :items="userItems" @logout="logout" />
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Navbar styling */
.navbar {
  padding: 10px 15px;
}

/* Ensure navbar takes full width and prevents shifting */
.navbar .container {
  max-width: 100%;
}

/* Center the search bar */
.search-box {
  width: 100%;
  max-width: 500px; /* Limits search box width */
}

/* Search suggestions dropdown */
.suggestions-list {
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 2px;
  padding: 0;
  list-style: none;
  z-index: 1000;
}

.suggestion-item {
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
}

.suggestion-item:hover {
  background: #f0f0f0;
}

/* Responsive Search Box */
@media (max-width: 768px) {
  .search-box {
    flex-direction: column;
  }

  .search-box input {
    width: 100%;
    margin-bottom: 5px;
  }

  .search-box button {
    width: 100%;
  }
}
</style>
