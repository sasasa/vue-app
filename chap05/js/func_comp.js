Vue.createApp({})
  .component('my-random', (props, context) => {
    const result = Math.floor(Math.random() *
      (props.max - props.min + 1) + props.min);
    return Vue.h('p', result);
  })
  .mount('#app');
