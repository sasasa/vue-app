Vue
  .createApp({
    setup(props, context) {
      const book = Vue.reactive({
        title: Vue.ref('Vue.js 3実践入門'),
        author: {
          name: Vue.ref('WINGSプロジェクト'),
        },
        memos: [
          Vue.ref('JavaScriptフレームワーク'),
          Vue.ref('Vue CLIやVuexを使ったアプリ開発'),
        ]
      });

      console.log(Vue.isRef(book.memos[0]));
      console.log(book.memos[0]);
      console.log(book.memos[0].value);
    }
  })
  .mount('#app');      