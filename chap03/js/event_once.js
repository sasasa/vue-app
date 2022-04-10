Vue.createApp({
  data() {
    return {
      result: '－'
    };
  },
  methods: {
    onclick(e) {
      this.result = Math.floor(Math.random() * 100) + 1;
    }
  }
}).mount('#app');