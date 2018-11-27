import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Options from './views/Options.vue';
import Feedback from './views/Feedback.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/options',
      name: 'options',
      component: Options,
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: Feedback,
    },
  ]
})
