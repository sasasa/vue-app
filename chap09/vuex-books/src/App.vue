<template>
  <div>
  <form v-on:submit.prevent="onclick">
    <label for="isbn">ISBN：</label>
    <input type="text" id="isbn" v-model="isbn" /><br />
    <label for="title">書名：</label>
    <input type="text" id="title" v-model="title" /><br />
    <label for="price">価格：</label>
    <input type="number" id="price" v-model="price" /><br />
    <input type="submit" value="登録" />
  </form>
  <hr />
    <p>書籍は全部で{{booksCount}}冊あります。</p>
    <ul v-for="b of getBooksByPrice(2500)" v-bind:key="b.isbn">
      <li>{{b.title}}（{{b.price}}円）<br />ISBN：{{b.isbn}}</li>
    </ul>
    <!-- <p>3000円未満の書籍は全部で{{booksCount3000}}冊あります。</p> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import { mapActions } from 'vuex'

export default {
  name: 'App',
  computed: mapGetters(['booksCount', 'getBooksByPrice']),
  
  // computed: mapGetters(['booksCount', 'getBooksByPrice', 'booksCount3000']),

  // computed: {
  //   booksCount() {
  //     return this.$store.getters.booksCount;
  //   }
  // },
  // methods: {
  //   getBooksByPrice(price) {
  //     return this.$store.getters.getBooksByPrice(price)
  //   }
  // }

  data() {
    return {
      isbn: '',
      title: '',
      price: 0
    }
  },
  methods: {  
    // ...mapActions([ 'addAsync' ]),
    // ...mapActions({ add: 'addAsync' }),

    onclick() {
      //mapActionsヘルパーを使う場合
      // this.addAsync({
      //   book: { isbn: this.isbn, title: this.title, price: this.price }
      // })
      // this.add({
      //   book: { isbn: this.isbn, title: this.title, price: this.price }
      // })
      //this.addAsync({
      // this.add({
      //   book: {
      //     isbn: this.isbn, title: this.title, price: this.price
      //   }
      // })

      // this.$store.commit('addBook', {
      //   book: {
      //     isbn: this.isbn, title: this.title, price: this.price
      //   }
      // })

      
      //オブジェクト形式でのcommitメソッド呼び出し
      // this.$store.commit({
      //   type: 'addBook',
      //   book: {
      //     isbn: this.isbn, title: this.title, price: this.price
      //   }
      // })      

      //addAsyncアクションの呼び出し
      this.$store.dispatch('addAsync', {
        book: {
          isbn: this.isbn, title: this.title, price: this.price
        }
      })
      
      // オブジェクトリテラルにまとめてaddAsyncアクションの呼び出し
      // this.$store.dispatch({
      //   type: 'addAsync',
      //   book: {
      //     isbn: this.isbn, title: this.title, price: this.price
      //   }
      // })
      
    }
  }
}
</script>

