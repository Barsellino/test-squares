import { createRouter, createWebHistory } from 'vue-router'


import AuthUser from "@/pages/auth-user.vue";
import GameSquares from '@/pages/game-squares.vue'

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: AuthUser
  },
  {
    path: '/game',
    name: 'Home',
    component: GameSquares
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
