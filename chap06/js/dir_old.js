Vue
  .createApp({
    data() {
      return {
        name: '名無権兵衛',
        color: 'yellow'
      };
    }
  })
  .directive('highlight', (el, binding, vnode, prevNode) => {
    // if (binding.value === binding.oldValue) { return; }
    console.log(binding.value);
    el.style.backgroundColor = binding.value;
  })
  .mount('#app');
