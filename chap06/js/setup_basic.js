Vue.createApp({})
  .component('my-counter', {
    props: [ 'init' ],
    template: `<div>現在値は{{ current }}です！
      <input type="button" v-on:click="onclick" value="増やす" /></div>`,
    setup(props, context) {
      const current = Vue.ref(props.init);
      const onclick = () => {
        current.value++;
      };
      // console.log(Vue.isRef(current));
      return {
        current,
        onclick
      };
    }
  })
  .mount('#app');