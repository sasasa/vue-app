<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p class="highlight">こんにちは、Vue.js！</p>
  <input type="button" value="変更" @click="onclick" />
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      color: 'Lightblue'
    };
  },
  methods: {
    onclick() {
      this.color = 'Yellow'
    }
  }
}
</script>

<style scoped>
.highlight {
  border: 1px solid Red;
  background-color: v-bind(color);
}
</style>
