Vue.createApp({})
  .component('my-hello', {
    template: `<div>こんにちは、{{ name }}！</div>`,
    data() {
      return {
        name: 'Vue.js'
      };
    }
  })
  .mount('#app');