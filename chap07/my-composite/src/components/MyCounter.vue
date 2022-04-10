<template>
  <div>現在値は{{ current }}です！
  <input type="button" v-on:click="onclick" value="増やす" /></div>
</template>

<!--
<script>
import useCounter from '../composables/useCounter'

export default {
  name: 'MyCounter',
  props: [ 'init' ],
  setup(props) {
    const { current, onclick } = useCounter(props.init)
    return {
      current,
      onclick
    }	
  }
}
</script>
-->

<script setup>
import { defineProps } from 'vue'
import useCounter from '../composables/useCounter'

const props = defineProps(['init'])
const { current, onclick } = useCounter(props.init)
</script>
