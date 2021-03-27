import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Register from "@/views/Register";
import Login from "@/views/Login";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})


export default router
