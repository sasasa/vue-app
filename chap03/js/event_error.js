Vue.createApp({
  data() {
    return {
      path: './images/wings.jpg'
    };
  },
  methods: {
    onerror() {
      this.path = './images/noimage.jpg';
    }
  }
}).mount('#app');