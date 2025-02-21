<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import DropdownMenu from './DropdownMenu.vue'

const router = useRouter()
const searchQuery = ref('')

// Function to navigate to the search page with the entered country
const performSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { country: searchQuery.value } })
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info fixed-top">
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
        <form class="d-flex mx-auto search-box" @submit.prevent="performSearch">
          <input
            v-model="searchQuery"
            class="form-control"
            type="search"
            placeholder="Enter Country"
            aria-label="Search"
          />
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>

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
