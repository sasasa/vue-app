Vue.createApp({
  methods: {
    onsubmit(e) {
      if (!confirm('送信しても良いですか？')) {
        e.preventDefault();
        return;
      }
    }
  }
}).mount('#app');