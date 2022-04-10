Vue
  .createApp({
    data() {
      return {
        current: 0
      };
    },
    methods: {
      onclick(e) {
        this.current += Number(e.target.textContent);
      },
    }
  })
  .component('my-counter', {
    // inheritAttrs: false,
    props: [ 'step' ], 
    emits: [ 'plusMinus' ],
    template: `<button type="button" v-on:click="onclick">
    {{ step }}</button>`,
    methods: {
      onclick() {
        this.$emit('plusMinus', Number(this.step));
      }
    }
  })
.mount('#app');