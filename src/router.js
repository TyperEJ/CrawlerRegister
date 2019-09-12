import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: "/CrawlerRegister/",
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/step_one',
      name: 'step_one',
      component: () => import('./views/StepOne.vue')
    },
    {
      path: '/step_two',
      name: 'step_two',
      component: () => import('./views/StepTwo.vue')
    }
  ]
})
