import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'courses',
        component: () => import('../views/CoursesView.vue')
      },
      {
        path: 'course/:id',
        component: () => import('../views/CourseView.vue')
      },
      {
        path: 'admin',
        component: () => import('../views/DashBoard.vue')
      },
      {
        path: 'test',
        component: () => import('../views/TestView.vue')
      }
    ]
  },
  {
    path: '/Home',
    component: () => import('../views/FrontView.vue')
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/user',
    component: () => import('../views/UserProfile.vue')
  },
  {
    path: '/dashboardLogin',
    component: () => import('../views/DashBoardLogin.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
