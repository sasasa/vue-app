Vue
  .createApp({
    data() {
      return {
        init: 0
      };
    },
    methods: {
      onclick() {
        this.init = Math.floor(Math.random() * 100) + 1;
      }
    }
  })
  .component('my-counter', {
    props: [ 'init' ],
    template: `<div>現在値は{{ current }}です！
      <input type="button" v-on:click="onclick" value="増やす" /></div>`,
    setup(props) {
      const current = Vue.ref(props.init);

      Vue.watch(
        () => props.init,
        (newV, oldV) => {
          current.value = newV;
        }
      );
      
      // Vue.watchEffect(() => {
      //   current.value = props.init;
      // });

      const onclick = () => {
        current.value++;
      };

      return {
        current,
        onclick
      };
    }
  })
  .mount('#app');