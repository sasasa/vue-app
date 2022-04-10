<template>
  <span>記事コード：{{ aid }}</span>
  <!-- <p>$route.paramsの戻り値：{{ $route.params }}</p> -->
</template>

<script>
export default {
  name: 'Article',
   props: {
    aid: String
  }
}
</script>