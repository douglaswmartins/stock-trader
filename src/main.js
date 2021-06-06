import Vue from 'vue'
import App from './App.vue'
import './plugins/axios'
import './style.css'

import store from './store/store'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.filter('currency', value => {
  return 'R$ ' + value.toLocaleString()
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
