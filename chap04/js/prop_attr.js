Vue.createApp({})
  .component('my-hello', {
    // inheritAttrs: false,
    template: `<div title="result" class="main" >こんにちは、Vue.js！</div>`
  })
  .mount('#app');
