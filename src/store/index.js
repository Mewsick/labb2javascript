import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showGlobal: true
  },
  mutations: {
    setNewShowGlobal(state, payload) {
      state.showGlobal = payload
    }
  
  }
})