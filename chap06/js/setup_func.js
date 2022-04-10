Vue.createApp({})
  .component('my-counter', {
    props: [ 'init' ],
    template: `<div>現在値は{{ current }}です！
      <input type="button" v-on:click="onclick" value="増やす" /></div>`,
    setup(props) {      
      const { current, onclick } = useCounter(props.init);
      return {
        current,
        onclick
      };

      // return {
      //   ...useCounter(props.init)
      // };
    }
  })
  .mount('#app');