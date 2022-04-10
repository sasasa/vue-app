Vue
  .createApp({
    data() {
      return {
        color: 'yellow'
      }
    },
  })
  .directive('highlight', {
    mounted(el, binding, vnode, prevNode) {
      el.style.backgroundColor = binding.value;
    },
    updated(el, binding, vnode, prevNode) {
      el.style.backgroundColor = binding.value;
    }
  })
  
  // .directive('highlight', (el, binding, vnode, prevNode) => {
  //   el.style.backgroundColor = binding.value;
  // })
  .mount('#app');