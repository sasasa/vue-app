import { createStore } from 'vuex'
import MainModule from './main-store'
import SubModule from './sub-store'

export default createStore({
  modules: {
    main: MainModule,
    sub : SubModule
  }
})
