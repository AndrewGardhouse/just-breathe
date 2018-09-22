import Vue from 'vue';
import VModal from 'vue-js-modal';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause, faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(VModal);
library.add(faPlay, faPause, faCog, faTimes);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
