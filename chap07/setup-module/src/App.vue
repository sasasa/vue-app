<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p v-bind:class="my.highlight">こんにちは、Vue.js！</p>
</template>

<script>
import { useCssModule } from 'vue'

export default {
  setup(){
    const my = useCssModule()
    // const my = useCssModule('sub')
    return {
      my
    }
  }
}
</script>

<!-- <style module="sub"> -->
<style module>
.highlight {
  border: 1px solid Red;
  background-color: Yellow;
}
</style>
