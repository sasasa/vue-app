Vue.createApp({
  data() {
    return {
      message: ''
    };
  },
  methods: {
    onclick() {
      this.message = new Date().toLocaleString();
    }
  }
}).mount('#app');