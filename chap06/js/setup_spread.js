Vue.createApp({})
  .component('my-counter', {
    props: [ 'init' ],
    template: `<div>現在値は{{ current }}です！
      <input type="button" v-on:click="onclick" value="増やす" /></div>`,
    setup(props, context) {
      const data = Vue.reactive({
        current: props.init,
      });
      const onclick = function() {
        data.current++;
      };
      return {
        // ...data, 
        ...Vue.toRefs(data),
        onclick
      };
    }
  })
  .mount('#app');