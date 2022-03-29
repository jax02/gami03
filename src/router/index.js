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
      },
      {
        path: 'login',
        component: () => import('../views/LoginView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
