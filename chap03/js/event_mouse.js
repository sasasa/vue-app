Vue.createApp({
  data() {
    return {
      path: 'https://www.web-deli.com/image/linkbanner_l.gif'
    };
  },
  methods: {
    onmouseenter() {
      this.path = 'https://www.web-deli.com/image/home_chara.gif';
    },
    onmouseleave() {
      this.path = 'https://www.web-deli.com/image/linkbanner_l.gif';
    }
  }
}).mount('#app');