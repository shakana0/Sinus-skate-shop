import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import CategoriesPage from '../views/CategoriesPage.vue'
import CheckoutPage from '../views/CheckoutPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/Profile',
    name: 'ProfilePage',
    component: ProfilePage
  },
  {
    path: '/Products',
    name: 'CategoriesPage',
    component: CategoriesPage
  },  
  {
    path: '/Checkout',
    name: 'CheckoutPage',
    component: CheckoutPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
