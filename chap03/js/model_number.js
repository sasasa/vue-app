Vue.createApp({
  data() {
    return {
      temperature: 0
    };
  },
  methods: {
    onchange() {
      console.log(this.temperature.toFixed(1));
    }
  }
}).mount('#app');