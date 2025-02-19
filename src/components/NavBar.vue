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
  <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <div class="container-fluid">
      <!-- Home Link -->
      <RouterLink class="navbar-brand" to="/">Home</RouterLink>

      <!-- Toggle button for mobile -->
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
        </ul>

        <!-- Search Form in Navbar -->
        <form class="d-flex me-3" @submit.prevent="performSearch">
          <input
            v-model="searchQuery"
            class="form-control me-2"
            type="search"
            placeholder="Enter Country"
            aria-label="Search"
          />
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>

        <!-- Dropdowns (Language & User) -->
        <ul class="navbar-nav">
          <DropdownMenu title="Lang" id="langDropdown" :items="['EN', 'ES', 'RU', 'FA']" />
          <DropdownMenu title="User" id="userDropdown" :items="['Profile', 'Sign Out']" />
        </ul>
      </div>
    </div>
  </nav>
</template>
