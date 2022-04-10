export default function(store) {
    store.subscribeAction((action, state) => {
      console.log(state)
      console.log(action.type)
      console.log(action.payload)
    //   unsubscribe()
    })
    // const unsubscribe = store.subscribeAction((action, state) => {
    //     console.log('監視の解除')
    //     console.log(state)
    //     console.log(action.type)
    // })    
  }