Vue.createApp({
  data() {
    return {
      num1: 0,
      num2: 0
    };
  },
  created: function() {
    this.$watch(
      () => this.num1 + this.num2,
      (newValue, oldValue) => {
        console.log(this.num1 + this.num2);
      }
    );
  }
}).mount('#app');