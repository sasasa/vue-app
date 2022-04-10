import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
import Search from '../views/Search.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
  {
    path: '/article/:aid(\\d{2,3})',
    name: 'Article',
    component: Article,
    props: true
  },
  {
    path: '/article/:aid',
    name: 'Article2',
    redirect: '10'
  },
  {
    path: '/search/:keywd',
    name: 'Search',
    component: Search,
    props: true
  },
  { 
    path: '/search',
    name: 'SearchQuery',
    redirect: to => `/search/${to.query.keywd}`
  },
  {
    path: '/:paths(.*)*',	
    name: 'nothing',
    redirect: '/'
    // redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
