const dataLoggable = {
  mounted() {
    console.log(this.$data);
  }
};

Vue.createApp({})
  .component('my-comp', {
    data() {
      return {
        current: new Date()
      };
    },
    template: `<div>現在時刻：{{ current }}</div>`,
    mixins: [ dataLoggable ]
  })
  .mount('#app');