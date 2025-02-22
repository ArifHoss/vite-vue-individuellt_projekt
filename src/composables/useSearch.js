import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { countries } from '@/stores/countries'

export function useSearch() {
  const router = useRouter()
  const searchQuery = ref('')
  const showSuggestions = ref(false)

  // Computed property for filtered country suggestions
  const filteredCountries = computed(() => {
    if (!searchQuery.value) return []
    return countries.filter((country) =>
      country.toLowerCase().startsWith(searchQuery.value.toLowerCase()),
    )
  })

  // Function to select a country from suggestions
  const selectSuggestion = (country) => {
    searchQuery.value = country
    showSuggestions.value = false
  }

  // Function to perform search and clear input
  const performSearch = () => {
    if (searchQuery.value.trim()) {
      const encodedQuery = encodeURIComponent(searchQuery.value.trim())
      router.push({ path: '/search', query: { country: encodedQuery } })

      setTimeout(() => {
        searchQuery.value = ''
      }, 300)
    }
  }

  return {
    searchQuery,
    showSuggestions,
    filteredCountries,
    selectSuggestion,
    performSearch,
  }
}
