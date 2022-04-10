Vue.createApp({})
  .component('my-loading', {
    props: [ 'type' ],
    render() {
      switch (this.type) {
        case 'text':
          return Vue.h('p', '...Now Loading...');        
        case 'image':
          return Vue.h('img', {
            src: 'loading.gif',
            alt: 'loading'
          });
        default: 
          console.error('type属性はimage、textいずれかで設定してください');
          return null;
      }
    }
  })
  .mount('#app');
