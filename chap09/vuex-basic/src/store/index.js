import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    count: 0
  },
  mutations: {
    minus(state) {
      state.count--
    },
    plus(state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
