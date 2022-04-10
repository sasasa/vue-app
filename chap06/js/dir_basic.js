Vue
  .createApp({
    data() {
      return {
        color: 'yellow'
      };
    },
    directives: {
      highlight: {
        mounted(el, binding, vnode, prevNode) {
          el.style.backgroundColor = binding.value;
        }
      }
    }
  })
  // .directive('highlight', {
  //   mounted(el, binding, vnode, prevNode) {
  //     el.style.backgroundColor = binding.value;
  //   }
  // })
  .mount('#app');