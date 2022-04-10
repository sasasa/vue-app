Vue.createApp({
  methods: {
    onclick(message, e) {
      console.log(message);
      console.log(e);
    }
  }
}).mount('#app');