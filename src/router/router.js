import Vue from 'vue'
import VueRouter from 'vue-router'
import LetMeIn from '../views/LetMeIn.vue'
import ListRunning from '../views/ListRunning.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'LetMeIn',
    component: LetMeIn,
  },
  {
    path: '/ListRunning',
    name: 'ListRunning',
    component: ListRunning,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
