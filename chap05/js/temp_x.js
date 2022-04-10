Vue.createApp({})
  .component('my-hello', {
    template: '#my-hello',
    data() {
      return {
        name: 'Vue.js'
      };
    }
  })
  .mount('#app');
