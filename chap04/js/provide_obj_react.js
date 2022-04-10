Vue.createApp({})
  .component('my-parent', {
    data() {
      return {
        book: {
          title: 'Vue 3実践入門'
        }
      };
    },
    provide() {
      return {
        book: this.book
      }
    },
    template: `
      <div id="parent">
        <input type="text" v-model="book.title" />
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
    inject: ['book'],
    template: `
      <div id="child">
        {{ book.title }}
      </div>
    `
  })
  .mount('#app');