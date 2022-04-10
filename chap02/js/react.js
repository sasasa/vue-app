Vue.createApp({
  data() {
    return {
      current: new Date()
    };
  },
  created() {
    this.timer = setInterval(() => {
      this.current = new Date();
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  renderTracked(e) {
    console.log('renderTracked');
    console.log(e);
  },
  renderTriggered(e) {
    console.log('renderTriggered');
    console.log(e);
  }  
}).mount('#app');
