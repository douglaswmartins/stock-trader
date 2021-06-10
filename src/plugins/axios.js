import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'https://stock-trader-b1dc3-default-rtdb.firebaseio.com/'

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;
  }
})