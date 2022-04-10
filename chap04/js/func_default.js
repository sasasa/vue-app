Vue.createApp({
  provide: {
    name: '鈴木'
  },
})
.component('my-hello', {
  props: {
    name:{
      type: String,
    },
    nickname: {
      type: String,
      default(props) {
        return props.name
        // injectメソッドを利用する場合
        // return Vue.inject('name', 'noname');
      }
    }
  },
  template:  `<div>こんにちは、{{ nickname }}さん！</div>`,
})
.mount('#app');