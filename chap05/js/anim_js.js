Vue
  .createApp({
    data() {
      return {
        flag: true
      };
    },
    methods: {
      onclick() {
        this.flag = !this.flag;
      },
      onenter(el, done) {
        Velocity(el, { opacity: 1}, { duration: 2000, complete: done });
      },
      onleave(el, done) {
        Velocity(el, { opacity: 0 }, { duration: 2000, complete: done });
      }
    }
  })
  .mount('#app');