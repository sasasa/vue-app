Vue.createApp({})
  .component('my-counter', {
    props: [ 'init' ],
    template: `<div>現在値は{{ data.current.value }}です！
      <!--<input type="button" v-on:click="data.current++" value="増やす" />-->
      <input type="button" v-on:click="data.current.value++" value="増やす" />
      </div>`,
    setup(props) {
      const current = Vue.ref(props.init);

      return {
        data: {
          current
        }
      };
    }
  })
  .mount('#app');