Vue.createApp({
  data() {
    return {
      current: 0
    };
  },
  methods: {
    onplus(e) {
      this.current += e;
    },
    // onmounted(e) {
    //   console.log(e);
    // }
  }
})
.component('my-counter', {
  props: [ 'step' ], 
  emits: [ 'plusMinus' ],
  // emits: {
  //   plusMinus(step) {
  //     if (step && Number.isInteger(step)) {
  //       return true;
  //     } else {
  //       console.log('plusMinus event object must be integer.');
  //       return false;
  //     }
  //   }
  // }, 
  template: `<button type="button" v-on:click="onclick">
    {{ step }}</button>`,
  methods: {
    onclick() {
      this.$emit('plusMinus', Number(this.step));
    }
  }
})
.mount('#app');
