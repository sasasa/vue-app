Vue.createApp({
  data() {
    return {
      todo: '',
      items: [
        'A書籍の構成案作成',
        'X記事の著者校正',
        '今月締の請求書作成',
        'WINGSメンバーの面接'
      ]
    };
  },
  methods: {
    onadd() {
      this.items.unshift(this.todo);
      this.todo = '';
    },
    onremove() {
      this.items = this.items.filter(value => value !== this.todo);
      this.todo = '';
    },
    onsort() {
      this.items.sort();
    }
  }
}).mount('#app');
