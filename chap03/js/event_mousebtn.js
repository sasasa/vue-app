Vue.createApp({
  data() {
    return {
      pos: {
        left: 0,
        top: 0
      },
      show: false
    };
  },
  methods: {
    onleftclick() {
      this.show = false;
    },
    onrightclick(e) {
      this.pos = {
        top: e.pageY + 'px',
        left: e.pageX + 'px'
      };
      this.show = true;
    }
  }
}).mount('#app');
