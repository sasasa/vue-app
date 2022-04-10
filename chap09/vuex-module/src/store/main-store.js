export default {
  namespaced: true,
  state: {
    updated: (new Date()).toTimeString()
  },
  mutations: {
    setUpdated(state) {
      state.updated = (new Date()).toTimeString()
    }
  },
  // getters: {
  //   localUpdated(state) {
  //     return state.updated
  //   }
  // },
  // actions: {
  //   globalAction: {
  //     handler(state) {
  //       console.log('globalAction is called.')
  //       console.log(state)
  //     },
  //     root: true
  //   },    
  // } 
}