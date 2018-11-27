import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Options from './views/Options.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/options',
      name: 'options',
      component: Options
    },
  ]
})
