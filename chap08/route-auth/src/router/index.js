import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Signin from '../views/Signin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      isRequestAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// authedフラグが立っていれば、認証済と見なす
let isAuthed = function() { return !!sessionStorage['authed']; }

router.beforeEach(to => {
  if (to.matched.some(route => route.meta.isRequestAuth)
    && !isAuthed()) {
    return { path: '/signin', query: { path: to.fullPath }}
  } else {
    return
  }
});

export default router
