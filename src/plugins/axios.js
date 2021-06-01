import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'https://curso-vuejs-c14c3-default-rtdb.firebaseio.com/'

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;
  }
})