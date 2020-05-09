import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vue-orgchart/dist/style.min.css'
import 'bootstrap'
import 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapVue } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
