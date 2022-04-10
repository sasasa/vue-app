const hook = (el, binding) => {
  if (binding.value === binding.oldValue) { return; }
  if (binding.modifiers.border) {
    el.style.borderColor = binding.value;
    el.style.borderStyle = 'solid';
  } else {
    el.style.backgroundColor = binding.value;
  }
};

Vue
  .createApp({
    data() {
      return {
        color: 'yellow'
      };
    }
  })
  .directive('highlight', {
    mounted: hook,
    updated(el, binding) {
      if (!binding.modifiers.once) {
        hook(el, binding);
      }
    }
  })
  .mount('#app');
