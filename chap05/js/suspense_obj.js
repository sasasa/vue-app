Vue.createApp({})
  .component('my-heavy', Vue.defineAsyncComponent({
    loader() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            data() {
              return { name: 'Suspense' };
            },
            template: `<div>お待たせしました。{{ name }}です！</div>`
          });
        }, 5000);
      })
    },
    
    loadingComponent: {
      template: `Now Loading...`
    },
    delay: 500,
    errorComponent: {
      template: `Loading Error!!`
    },
    timeout: 7000,
    suspensible: false,
  }))
  .mount('#app');