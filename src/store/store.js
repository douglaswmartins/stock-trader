import Vue from 'vue'
import Vuex from 'vuex'

import stock from './modules/stocks'
import portfolio from './modules/portfolio'
import actions from './modules/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    stock,
    portfolio
  }
})