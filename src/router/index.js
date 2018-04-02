import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import JGPro2 from '../components/jianguopro2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/JGPro2',
      name: 'JGPro2',
      component: JGPro2
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
