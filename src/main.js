import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch, faEdit, faTrash, faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

library.add(faSearch);
library.add(faEdit);
library.add(faTrash);
library.add(faPlus);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
