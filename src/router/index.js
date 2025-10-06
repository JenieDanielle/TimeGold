
import { createRouter, createWebHistory } from 'vue-router'

// 1. Importe o componente da View
import HomeView from '@/views/HomeView.vue' 
import ModalComponent from '@/views/components/ModalComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    }
  ],
})

export default router