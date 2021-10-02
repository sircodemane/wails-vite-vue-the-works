import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/features',
    name: 'Features',
    component: () => import('./components/Features.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
