export default {
  namespaced: true,
  state: {
    updated: (new Date()).toTimeString()
  },
  mutations: {
    setUpdated(state) {
      state.updated = (new Date()).toTimeString()
    }
  }
}