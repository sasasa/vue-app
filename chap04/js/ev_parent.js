Vue.createApp({
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    this.$refs.child.message = '親から設定';
  }
})
.component('my-child', {
  data() {
    return {
      message: ''
    }
  },
  template: `<p>子：{{ message }}</p>`,
  mounted() {
    this.$parent.message = '子から設定';
    // this.$root.message = '子から設定';
  }
})
.mount('#app');
  