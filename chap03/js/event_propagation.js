Vue.createApp({
  methods: {
    onParentClick(e) {
      console.log('#parent run...');
    },
    onMyClick(e) {
      console.log('#my run...');
    },
    onChildClick(e) {
      console.log('#child run...');
    }
  }
}).mount('#app');