Vue
  .createApp({
    setup(props, context) {
      const author = Vue.markRaw({
        name: 'WINGSプロジェクト',
      });
      const book = Vue.reactive({
        title: 'Vue.js 3実践入門',
        author
      });

      console.log(Vue.isReactive(Vue.reactive(author)));
      console.log(Vue.isReactive(book));
      console.log(Vue.isReactive(book.author));
    }
  })
  .mount('#app');