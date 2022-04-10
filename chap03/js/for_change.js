Vue.createApp({
  data() {
    return {
      list: [ '赤パジャマ', '青パジャマ', '黄パジャマ' ]
    };
  },
  methods: {
    onclick() {
      this.list[1] = '茶パジャマ';
      // this.list.shift();      
    }
  }
}).mount('#app');
