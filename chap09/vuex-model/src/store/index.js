import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    name: ''
  },
  mutations: {
    updateName(state, name) {
      state.name = name
    }
  },
  actions: {
  },
  modules: {
  }
})
