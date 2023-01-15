import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Index from '@/views/Index.vue'
import jsCookie from 'js-cookie'
import axios from 'axios'

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/:id',
    component: Index
  },
  {
    path: '/',
    component: Index
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (to.path === '/login') {
    next()
  } else if (jsCookie.get('token')) {
    next()
  } else {
    next('/login')
  }
})

export default router
