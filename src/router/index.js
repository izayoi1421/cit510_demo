import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import HomeView from '../views/HomeView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import AxiosDemoView from '../views/AxiosDemoView.vue'
import AxiosTriviaQuiz from '../views/AxiosTriviaQuiz.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: AboutMeView
      },
      {
        path: '/axiosDemo',
        name: 'axiosDemo',
        component: AxiosDemoView
      },      
      {
        path: '/axiosQuiz',
        name: 'axiosQuiz',
        component: AxiosTriviaQuiz
      },              
  ]
})

export default router
