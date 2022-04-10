Vue.createApp({
  data() {
    return {
      screenX: 0,
      screenY: 0,
      pageX: 0,
      pageY: 0,
      clientX: 0,
      clientY: 0,
      offsetX: 0,
      offsetY: 0
    };
  },
  methods: {
    onmousemove(e) {
      this.screenX = e.screenX;
      this.screenY = e.screenY;
      this.pageX = e.pageX;
      this.pageY = e.pageY;
      this.clientX = e.clientX;
      this.clientY = e.clientY;
      this.offsetX = e.offsetX;
      this.offsetY = e.offsetY;
    }
  }
}).mount('#app');