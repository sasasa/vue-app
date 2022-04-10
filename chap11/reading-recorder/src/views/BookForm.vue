<template>
  <div id="form">
    <BookInfo :book="book"></BookInfo>
    <hr />
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="読了日">
        <el-date-picker type="date" v-model="form.read"></el-date-picker>
      </el-form-item>
      <el-form-item label="感想" prop="memo">
        <el-input type="textarea" size="large" v-model="form.memo"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onsubmit">登録</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { h } from 'vue'
import { mapGetters, mapActions } from 'vuex'
import BookInfo from '@/views/BookInfo.vue'
import { UPDATE_CURRENT, UPDATE_BOOK } from '@/store/mutation-types'

export default {
  name: 'BookForm',
  components: {
    BookInfo
  },
  data() {
    return {
      book: {},
      form: {
        read: new Date(),
        memo: ''
      },
      rules: {
        memo: [
          { required: true, message: 'メモが未入力です。', trigger: 'blur' }
        ]
      }
      
      // rules: {
      //   memo: [{
      //     validator: (rule, value, callback) => {
      //       if (!value) {
      //         return callback(new Error('メモが未入力です。'))
      //       }
      //     },
      //     trigger: 'change'
      //   }]
      // }
      
    }
  },
  computed: mapGetters([ 'current', 'getBookById' ]),
  created() {
    if (!this.current) {
      this.$router.push('/')
    }
    this.book = Object.assign({}, this.current)
  },
  mounted() {
    const b = this.getBookById(this.book.id)
    if (b) {
      this.form.read = b.read
      this.form.memo = b.memo
    }
  },
  methods: {
    ...mapActions([UPDATE_BOOK, UPDATE_CURRENT]),
    onsubmit() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this[UPDATE_BOOK](
            Object.assign({}, this.book, this.form)
          )
          this[UPDATE_CURRENT](null)
          this.$notify({
            title: 'Reading Recorder',
            message: h('p', { style: 'color: #009' },
              '読書情報の登録／更新に成功しました。'),
            duration: 2000
          })
          this.form.read = new Date()
          this.form.memo = ''
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style scoped>
#form {
  margin-top: 15px;
}
</style>
