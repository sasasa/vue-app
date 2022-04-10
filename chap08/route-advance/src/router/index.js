import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
import Hoge from '../views/Hoge.vue'
import Profile from '../views/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { effect: 'slide-down' },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: { effect: 'fade-in' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/article/:aid',
    name: 'Article',
    component: Article,
    props: true
  },
  {
    path: '/hoge',
    name: 'hoge',
    component: Hoge
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.hash) {
        return { el: to.hash, behavior: 'smooth' }
      } else {
        return { top: 0 }
      }
    }
  }
})

router.addRoute({
  path: '/profile',
  name: 'Profile',
  component: Profile
})
export default router
