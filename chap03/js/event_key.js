Vue.createApp({
  data() {
    return {
      name: '匿名'
    };
  },
  methods: {
    clear() {
      this.name = '';
    }
  }
}).mount('#app');