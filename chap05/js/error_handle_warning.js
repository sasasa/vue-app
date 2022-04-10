const app = Vue
  .createApp({})
  .component('my-parent', {
    template: `
      <div id="parent">
        <my-child />
      </div>
    `, 
  })
  .component('my-child', {
    template: `
      <div id="child">
        MyChild {{ hoge }}
      </div>
    `
  })

  app.config.warnHandler = (msg, vm, trace) => {
    console.log('■■ Global Warn ■■');
    console.log(msg);
    console.log(vm);
    console.log(trace);
  }
app.mount('#app');