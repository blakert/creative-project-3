import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock.js';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import _ from 'lodash';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false


let data = {
  posts : mock,
  messages : [],
  notes : [],
  messageSeeder: {
    name: null,
    subject: null,
    email: null
  },
  carInfo: {},
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
