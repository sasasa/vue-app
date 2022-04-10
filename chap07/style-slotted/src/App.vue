<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <MyChild>
      <span class="highlight">鈴木</span>
    </MyChild>
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
</style>
