<template>
  <span>記事コード：{{ aid }}</span>
</template>

<script>
export default {
  name: 'Article',
  data() {
    return {
      aid: 0
    }
  },
  created() {
    this.aid = this.$route.params.aid
  },
  watch: {
    '$route'(to) {
      this.aid = to.params.aid
    }
  }
}

// Composition APIの場合
// import { ref, watch } from 'vue'
// import { useRoute } from 'vue-router'

// export default {
//   name: 'Article',
//   setup() {
//     const route = useRoute()
//     const aid = ref(route.params.aid)
//     watch(
//       () => route.params.aid,
//       to => { aid.value = to }
//     )
//     return {
//       aid
//     }
//   }
// }
</script>
