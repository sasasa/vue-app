export default {
  namespaced: true,
  state: {
    updated: (new Date()).toLocaleTimeString()
  },
  mutations: {
    setUpdated(state)   {
      state.updated = (new Date()).toLocaleTimeString()
    }
  }
}