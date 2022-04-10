<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p v-bind:class="$style.highlight">こんにちは、Vue.js！</p>
  <!-- <p v-bind:class="my.highlight">こんにちは、Vue.js！</p> -->
</template>

<script>
export default {
  name: 'App'
}
</script>

<!-- <style module="my"> -->
<style module>
.highlight {
  border: 1px solid Red;
  background-color: Yellow;
}
</style>