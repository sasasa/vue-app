Vue.createApp({})
  .component('my-counter', {
    props: [ 'init' ],
    template: `<div>現在値は{{ currentPlus }}です！
      <input type="button" v-on:click="onclick" value="増やす" /></div>`,
    setup(props) {
      const current = Vue.ref(props.init);
      const onclick = () => {
        current.value++;
      };
      const currentPlus = Vue.computed(
        () => current.value < 50 ? current.value : '50+');
      
      return {
        current,
        currentPlus,
        onclick
      };
    }
  })
  .mount('#app');