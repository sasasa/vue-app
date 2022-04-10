<template>
  <p class="highlight">こんにちは、Vue.js！</p>
  <div>こんにちは、<slot class="highlight">ゲスト</slot>さん！</div>
</template>

<script>
export default {
  name: 'MyChild'
}
</script>

<style scoped>
:slotted(.highlight) {
/* .highlight { */
  border: 1px solid Red;
  background-color:Yellow;
}
</style>