import { createStore } from 'vuex'
import MainModule from './main-store'
import SubModule from './sub-store'

export default createStore({
  modules: {
    main: MainModule,
    sub : SubModule
  }
})


// 動的登録
// const store = createStore({})
// store.registerModule('main', MainModule)
// store.registerModule('sub', SubModule)
// export default store

 
