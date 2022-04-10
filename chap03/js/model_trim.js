Vue.createApp({
  data() {
    return {
      memo: ''
    };
  },
  methods: {
    onchange() {
      console.log(`入力値は「${this.memo}」です。`);
    }
  }
}).mount('#app');