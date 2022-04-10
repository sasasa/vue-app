Vue.createApp({})
  .component('my-counter', {
    props: [ 'init' ],
    template: `<div>現在値は{{ current }}です！
      <input type="button" v-on:click="onclick" value="増やす" /></div>`,
    data() {
      return {
        current: this.init
      };
    },
    methods: {
      onclick() {
        this.current++;
      }
    }
  })
  .mount('#app');