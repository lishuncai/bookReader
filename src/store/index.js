import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    userName: null,
    logined: false
  },
  mutations: {
    setUserName (state, v) {
      state.userName = v
    },
    login (state, bool) {
      state.logined = bool
    }
  },
  actions: {
    login ({
      commit
    }, loginInfos) {
      return new Promise((resolve, reject) => {
        const relAccount = 'admin'; //  假设
        if (typeof loginInfos === 'object' && relAccount === loginInfos.account) {
          commit('setUserName', loginInfos.account)
          commit('login', true)
          resolve('success')
        } else {
          reject(new Error('login fail'))
        }
      })
    }
  }
})