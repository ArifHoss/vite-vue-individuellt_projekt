import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const AboutView = () => import('../views/AboutView.vue')
const UniversitySearch = () => import('../components/UniversitySearch.vue')
const NotFound = () => import('../views/NotFound.vue')
const Login = () => import('../components/LogIn.vue')
const Logout = () => import('../components/LogOut.vue')
const Layout = () => import('../components/LayOut.vue')
const Profile = () => import('../views/UserProfile.vue')
const CreateAccount = () => import('../components/CreateAccount.vue')

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
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
  },
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/create',
    name: 'create',
    component: CreateAccount,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
