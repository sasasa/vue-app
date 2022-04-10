Vue.createApp({
  data() {
    return {
      email: 'Y-Suzuki@example.com'
    }
  },
  computed: {
    localEmail() {
      return this.email.split('@')[0].toLowerCase();
    }
  }
}).mount('#app');