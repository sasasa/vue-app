<template>
  <span>記事コード：{{ $route.params.aid }}</span>
  <!-- <span>記事コード：{{ aid }}</span> -->
</template>

<script>
export default {
  name: 'Article',
   props: {
    aid: String
  }
  // props: {
  //   aid: Number
  // }
}
</script>