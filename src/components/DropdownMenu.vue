<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  title: String,
  id: String,
  items: Array,
})
</script>

<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      :id="id"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ title }}
    </a>
    <ul class="dropdown-menu dropdown-menu-end" :aria-labelledby="id">
      <li v-for="(item, index) in items" :key="index">
        <RouterLink v-if="item === 'Profile'" class="dropdown-item" to="/profile">
          {{ item }}
        </RouterLink>
        <a v-else class="dropdown-item" href="#">{{ item }}</a>
      </li>
    </ul>
  </li>
</template>

<style scoped>
/* Styling for active link */
.nav-link.active {
  font-weight: bold;
  color: white !important;
}
</style>
