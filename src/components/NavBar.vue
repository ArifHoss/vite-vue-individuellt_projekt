<script setup>
import { useSearch } from '@/composables/useSearch'
import DropdownMenu from './DropdownMenu.vue'

const { searchQuery, showSuggestions, filteredCountries, selectSuggestion, performSearch } =
  useSearch()
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
    <div class="container">
      <!-- Home Link -->
      <RouterLink class="navbar-brand" to="/">University Finder</RouterLink>

      <!-- Mobile Toggle Button -->
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

      <!-- Navbar Collapsible Content -->
      <div class="collapse navbar-collapse" id="nav-collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
        </ul>

        <!-- Centered Search Form -->
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
            <button class="btn btn-outline-light" type="submit">Search</button>
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

        <!-- Right-side Dropdowns -->
        <ul class="navbar-nav">
          <DropdownMenu title="Lang" id="langDropdown" :items="['EN', 'ES', 'RU', 'FA']" />
          <DropdownMenu title="User" id="userDropdown" :items="['Profile', 'Sign Out']" />
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
