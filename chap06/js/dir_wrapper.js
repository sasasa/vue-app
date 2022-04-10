Vue
  .createApp({
    data() {
      return {
        options: {
          gfm: true,
          breaks: true,
          xhtml: true,
        }
      };
    },
    compilerOptions: {
      whitespace: 'preserve'
    }
  })
  .directive('markdown', (el, binding) => {
    el.innerHTML = marked(el.textContent, binding.value);
  })
  .mount('#app');