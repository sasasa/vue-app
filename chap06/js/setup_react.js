Vue.createApp({})
  .component('my-counter', {
    props: [ 'init' ],
    template: `<div>現在値は{{ data.current }}です！
      <input type="button" v-on:click="onclick" value="増やす" /></div>`,
    setup(props, context) {
      const data = Vue.reactive({
        current: props.init,
      });
      const onclick = () => {
        data.current++;
      };
      return {
        data, 
        onclick
      };
    }
  })
  .mount('#app');