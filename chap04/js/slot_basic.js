Vue.createApp({})
  .component('my-hello', {
    template: `<div>こんにちは、<slot>ゲスト</slot>さん！</div>`,
  })
  .mount('#app');