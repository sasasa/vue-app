const app = Vue.createApp({
  setup(props, context) {
    Vue.onBeforeMount(() => {
      console.log('onBeforeMount...');
    });
    Vue.onMounted(() => {
      console.log('onMounted...');
    });
    Vue.onBeforeUpdate(() => {
      console.log('onBeforeUpdate...');
    });
    Vue.onUpdated(() => {
      console.log('onUpdated...');
    });
    Vue.onBeforeUnmount(() => {
      console.log('onBeforeUnmount...');
    });
    Vue.onUnmounted(() => {
      console.log('onUnmounted...');
    });
  }
})
app.mount('#app');

setTimeout(() => {
  app.unmount();
}, 3000);