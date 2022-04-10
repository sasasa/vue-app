<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <p class="highlight">こんにちは、Vue.js！</p>
    <MyChild />
  </div>
</template>

<script>
import MyChild from './components/MyChild.vue'

export default {
  name: 'App',
  components: {
    MyChild
  }
}
</script>

<style scoped>
/* .highlight { */
:deep(.highlight) {
  border: 1px solid Red;
  background-color:Yellow;
}
</style>
