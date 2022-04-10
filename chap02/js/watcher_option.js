Vue.createApp({
  data() {
    return {
      author: {
        name: '匿名',
        age: '20'
      }
    };
  },
  watch: {
    author: {
      handler(newValue, oldValue) {
        console.log(newValue);
      },
      deep: true,
      immediate: true
    }
  }
}).mount('#app');