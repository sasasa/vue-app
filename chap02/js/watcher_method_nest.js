Vue.createApp({
  data() {
    return {
      author: {
        name: '匿名',
        age: ''
      }
    };
  },
  created() {
    this.$watch(
      () => this.author.name,
      (newValue, oldValue) => {
        console.log(`${newValue}/${oldValue}`);
      }
    );
  },  
}).mount('#app');