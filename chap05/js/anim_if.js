Vue.createApp({
  data() {
    return {
      flag: true
    };
  },
  methods: {
    onclick() {
      this.flag = !this.flag;
    }
  }
}).mount('#app');