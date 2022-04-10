Vue.createApp({
  data() {
    return {
      attrs: {
        size: 20,
        maxlength: 14,
        required: true
      }
    };
  }
}).mount('#app');