Vue.createApp({})
  .component('my-parent', {
    provide: {
      title: 'Vue 3実践入門'
    },
    template: `
      <div id="parent">
        <my-my />
      </div>
    `
  })
  .component('my-my', {
    template: `
      <div id="my">
        <my-child />
      </div>
    `
  })
  .component('my-child', {
    inject: ['title'],
    template: `
      <div id="child">
        {{ title }}
      </div>
    `
  })
  .mount('#app');