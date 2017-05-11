import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './user_info'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userInfo
  },
  getters: {
    token: ({ userInfo }) => userInfo.token
  }
})