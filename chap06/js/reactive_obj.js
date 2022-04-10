Vue
  .createApp({
    setup(props, context) {
      const book = Vue.reactive({
        title: Vue.ref('Vue.js 3実践入門'),
        author: {
          name: Vue.ref('WINGSプロジェクト'),
        },
      })
      console.log(Vue.isRef(book.title));
      console.log(book.title);
      console.log(Vue.isRef(book.author.name));
      console.log(book.author.name);
    }
  })
  .mount('#app');      