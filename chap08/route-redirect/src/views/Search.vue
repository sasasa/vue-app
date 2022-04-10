<template>
  <span>キーワード：{{ keywd }}</span>
</template>

<script>
export default {
  name: 'Article',
   props: {
    keywd: String
  }
}
</script>