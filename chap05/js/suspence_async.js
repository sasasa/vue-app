Vue.createApp({})
  .component('my-heavy', Vue.defineAsyncComponent(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data() {
            return { name: 'Suspense' };
          },
          template: `<div>お待たせしました。{{ name }}です！</div>`
        });
      }, 5000);
    })
  })
  )
  .mount('#app');