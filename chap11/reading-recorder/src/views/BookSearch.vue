<template>
  <div id="search">
    <el-form :inline="true">
      <el-form-item label="キーワード">
        <el-input type="text" size="large" v-model="keyword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onclick">検索</el-button>
      </el-form-item>
    </el-form>
    <hr />
    <BookInfo v-for="(b, i) of books"
      :linkable="true" :book="b" :index="i + 1" :key="b.isbn">
    </BookInfo>   
  </div>
</template>

<script>
import BookInfo from '@/views/BookInfo.vue'

export default {
  name: 'BookSearch',
  components: {
    BookInfo
  },
  data() {
    return {
      keyword: 'vuejs',
      books: []
    }
  },
  methods: {
    onclick: function() {
      this.$http(`https://www.googleapis.com/books/v1/volumes?q=${this.keyword}`)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.books = []
          for (let b of data.items) {
            const authors = b.volumeInfo.authors
            const price = b.saleInfo.listPrice
            const img = b.volumeInfo.imageLinks
            this.books.push({
              id: b.id,
              title: b.volumeInfo.title,
              author: authors ? authors.join(',') : '',
              price: price ? price.amount : '-',
              publisher: b.volumeInfo.publisher,
              published: b.volumeInfo.publishedDate,
              image: img ? img.smallThumbnail : '',
            })
          }
        })
    }
  }
}
</script>

<style scoped>
#search form {
  margin-top: 15px;
}
</style>
