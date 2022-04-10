Vue.createApp({
  data() {
    return {
      name: '匿名'
    };
  },
  methods: {
    help() {
      window.alert('氏名（漢字）を入力してください');
    }
  }
}).mount('#app');