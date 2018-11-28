import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause, faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import store from './store';
import './registerServiceWorker';
import router from './router';

Vue.config.productionTip = false;
library.add(faCog, faTimes);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
