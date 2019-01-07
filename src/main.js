import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import store from './store';
import './registerServiceWorker';
import router from './router';

Vue.config.productionTip = false;
library.add(faCog);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueAnalytics, {
  id: 'UA-58720312-4',
  router,
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
