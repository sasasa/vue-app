import { createStore } from 'vuex'
import { ADD_BOOK } from './mutation-types'
import myLog from './my-log'
// import { createLogger } from 'vuex'

export default createStore({
  strict: true,
  state: {
    books: [
      {
        isbn: '978-4-2960-8009-0',
        title: '作って楽しむプログラミング Androidアプリ超入門',
        price: 2200
      },
      {
        isbn: '978-4-7981-6849-4',
        title: '独習Ruby 新版',
        price: 3740
      },
      {
        isbn: '978-4-7741-9763-0',
        title: '独習PHP 第4版',
        price: 2480
      },
      {
        isbn: '978-4-7981-6956-9',
        title: '基礎から学ぶReact Native入門',
        price: 1760
      },
      {
        isbn: '978-4-297-11496-1',
        title: 'Javaポケットリファレンス',
        price: 3278
      },
    ]
  },
  getters: {
    booksCount(state) {
      return state.books.length
    },
    getBooksByPrice(state) {
      return price => {
        return state.books.filter(book => book.price < price)
      }
    },    
    booksCount3000(state, getters) {
      return getters.getBooksByPrice(3000).length
    }
    
  },
  mutations: {
    addBook(state, payload) {
      state.books.push(payload.book)
    }
        
    // 定数対応
    // [ADD_BOOK](state, payload) {
    //   state.books.push(payload.book)
    // }    

  },
  actions: {    
    addAsync(context, payload) {
      setTimeout(() => {
        context.commit(ADD_BOOK, payload)
      }, 5000)
    }    
    
    // 分割代入を使った場合
    // addAsync({ commit }, payload) {
    //   setTimeout(() => {
    //     commit(ADD_BOOK, payload)
    //   }, 5000);
    // }
    
  },
  modules: {
  },
  plugins: [myLog]

  // 標準のロガープラグイン
  // plugins: [createLogger({
  //   collapsed: false,
  //   actionFilter(action) {
  //     return !action.type.endsWith('Action')
  //   },
  //   actionTransformer(action) {
  //     return action.type
  //   }
  // })]
})
