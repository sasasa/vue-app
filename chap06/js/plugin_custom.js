const MyUtil = {
  install(app, options) {
    app.directive('highlight', {
      mounted(el, binding) {
        el.addEventListener('mouseenter', e => {
          e.target.style.backgroundColor = binding.value;
        }, false);
        el.addEventListener('mouseleave', e => {
          e.target.style.backgroundColor = null;
        }, false);
      }
    });
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
  .use(MyUtil)
  .mount('#app');
