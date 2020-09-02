import Vue from 'vue'
import App from './App.vue'
import http from './http/axios';
import router from './router';
import config from '../config/dev.env';
import { BootstrapVue, IconsPlugin  } from 'bootstrap-vue'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.prototype.config = config; // 挂载到Vue实例上面
Vue.prototype.baseURL = process.env.VUE_APP_SERVICE_URL;
Vue.config.productionTip = false
Vue.prototype.$http = http;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
