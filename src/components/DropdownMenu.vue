<script setup>
import { defineProps, defineEmits } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  title: String,
  id: String,
  items: Array,
})

// Emit event for logout
const emit = defineEmits(['logout'])
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
        <RouterLink v-if="item === 'Profile'" class="dropdown-item" to="/profile">{{
          item
        }}</RouterLink>
        <RouterLink v-else-if="item === 'Login'" class="dropdown-item" to="/login">{{
          item
        }}</RouterLink>
        <a v-else class="dropdown-item" href="#" @click.prevent="emit('logout')">{{ item }}</a>
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
