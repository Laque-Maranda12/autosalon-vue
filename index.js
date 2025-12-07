import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import Home from '@/views/Home.vue'
import CarDetail from '@/views/CarDetail.vue'
import Catalog from '@/views/Catalog.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import HowToBuy from '@/views/HowToBuy.vue'
import Advantages from '@/views/Advantages.vue'
import Reviews from '@/views/Reviews.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'catalog',
        name: 'Catalog',
        component: Catalog
      },
      {
        path: 'car/:id',
        name: 'CarDetail',
        component: CarDetail
      },
      {
        path: 'about',
        name: 'About',
        component: About
      },
      {
        path: 'contact',
        name: 'Contact',
        component: Contact
      },
      {
        path: 'how-to-buy',
        name: 'HowToBuy',
        component: HowToBuy
      },
      {
        path: 'advantages',
        name: 'Advantages',
        component: Advantages
      },
      {
        path: 'reviews',
        name: 'Reviews',
        component: Reviews
      },
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

