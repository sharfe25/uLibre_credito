import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import HomeDashboard from '../views/dashboard/HomeDashboard.vue'
import NewCredit from '../views/dashboard/NewCredit.vue'
import AppLayout from '../AppLayout.vue'
import DashboardLayout from '../DashboardLayout.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Inicio'
  },
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: '/Inicio',
        name: 'Inicio',
        component:  Home
      },
      {
        path: '/Login',
        name: 'Login',
        component:  Login
      },
      {
        path: '/Register',
        name: 'Register',
        component:  Register
      },
    ]
  },
  {
    path: '',
    component: DashboardLayout,
    children: [
      {
        path: '/HomeDashboard',
        name: 'HomeDashboard',
        component:  HomeDashboard
      },
      {
        path: '/NewCredit',
        name: 'NewCredit',
        component:  NewCredit
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
