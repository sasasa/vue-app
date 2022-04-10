const MyHello = {
  template: `<div>こんにちは、Vue.js！</div>`
};

Vue.createApp({
  components: {
    'my-hello': MyHello
  }
}).mount('#app');