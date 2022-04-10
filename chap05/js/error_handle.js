window.addEventListener('error', e => {
  e.preventDefault();
  console.log('■■ error listener ■■');
  console.log(e);
});

window.addEventListener('unhandledrejection', e => {
  e.preventDefault();
  console.log('■■ unhandledrejection listener ■■');
  console.log(e);
});

const app = Vue
  .createApp({})
  .component('my-parent', {
    template: `
      <div id="parent">
        <my-child />
      </div>
    `,
    // errorCaptured(error, instance, info) {
    //   console.log('■■ Hook ■■');
    //   console.log(error);
    //   console.log(instance);
    //   console.log(info);
    //   // return false;
    // }   
  })
  .component('my-child', {
    mounted() {
      // setTimeout(() => {
      //   throw new Error('Error is occured by setTimeout.');  
      // }, 500);

      // new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     reject('Error is occured by Promise.');  
      //   }, 500);
      // });

      throw new Error('Error is occured by my-child.');
    },
    template: `
      <div id="child">
        MyChild
      </div>
    `
  })

app.config.errorHandler = (error, vm, info) => {
  console.log('■■ Global ■■');
  console.log(error);
  console.log(vm);
  console.log(info);
};
app.mount('#app');