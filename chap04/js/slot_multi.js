Vue.createApp({})
  .component('my-slot', {
    template: `<div>
      <header>
        <slot name="header">DEFAULT HEADER</slot>
      </header>
      <div>
        <slot>DEFAULT MAIN</slot>
      </div>
      <footer>
        <slot name="footer">DEFAULT FOOTER</slot>
      </footer>
    </div>`
  })
  .mount('#app');
