import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const AboutView = () => import('../views/AboutView.vue')
const UniversitySearch = () => import('../components/UniversitySearch.vue')
const NotFound = () => import('../views/NotFound.vue') // 404 Page

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/search',
    name: 'search',
    component: UniversitySearch,
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all route for 404 errors
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
