<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')

// Redirect to search page
const performSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { country: searchQuery.value } })
  }
}
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero text-center">
      <h1>Welcome to University Finder 🎓</h1>
      <p>Find universities worldwide easily with just a search.</p>

      <!-- Search Box -->
      <div class="search-box">
        <input
          v-model="searchQuery"
          type="text"
          class="form-control"
          placeholder="Enter a country..."
        />
        <button @click="performSearch" class="btn btn-primary">Search</button>
      </div>
    </section>

    <!-- Featured Universities -->
    <section class="featured">
      <h2>Popular Universities</h2>
      <div class="universities">
        <div class="university-card">
          <h3>Harvard University</h3>
          <p>United States</p>
          <a href="https://www.harvard.edu" target="_blank">Visit Website</a>
        </div>
        <div class="university-card">
          <h3>University of Oxford</h3>
          <p>United Kingdom</p>
          <a href="https://www.ox.ac.uk" target="_blank">Visit Website</a>
        </div>
        <div class="university-card">
          <h3>Stanford University</h3>
          <p>United States</p>
          <a href="https://www.stanford.edu" target="_blank">Visit Website</a>
        </div>
        <div class="university-card">
          <h3>University Of Amsterdam</h3>
          <p>Netherlands</p>
          <a href="http://www.uva.nl/" target="_blank">Visit Website</a>
        </div>
        <div class="university-card">
          <h3>Stockholm University</h3>
          <p>Sweden</p>
          <a href="https://www.su.se" target="_blank">Visit Website</a>
        </div>
      </div>
    </section>

    <!-- Quick Stats -->
    <section class="stats">
      <h2>Why Use University Finder?</h2>
      <div class="stats-grid">
        <div class="stat-box">
          <h3>1000+</h3>
          <p>Universities Listed</p>
        </div>
        <div class="stat-box">
          <h3>190+</h3>
          <p>Countries Covered</p>
        </div>
        <div class="stat-box">
          <h3>Easy Search</h3>
          <p>Find universities instantly</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero Section */
.hero {
  text-align: center;
  padding: 50px 20px;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1.2rem;
  color: #555;
}

/* Search Box */
.search-box {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.search-box input {
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-box button {
  margin-left: 10px;
}

/* Featured Universities */
.featured {
  text-align: center;
  margin: 50px 0;
}

.universities {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.university-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  width: 200px;
}

.university-card h3 {
  font-size: 1.2rem;
}

.university-card a {
  display: block;
  margin-top: 5px;
  color: #007bff;
  text-decoration: none;
}

/* Stats Section */
.stats {
  text-align: center;
  margin-top: 50px;
}

.stats-grid {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.stat-box {
  background: #17a2b8;
  color: white;
  padding: 20px;
  border-radius: 10px;
  min-width: 150px;
}

.stat-box h3 {
  font-size: 1.8rem;
}
</style>
