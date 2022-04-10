Vue.createApp({})
  .component('my-parent', {
    data() {
      return {
        title: 'Vue 3実践入門'
      };
    },
    provide() {
      return {
        title: this.title
      }
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