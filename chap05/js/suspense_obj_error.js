Vue.createApp({})
  .component('my-heavy', Vue.defineAsyncComponent({
    loader() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject('This is my error!!');
        }, 700)
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
    onError(error, retry, fail, attempts) {
      if (error.message.includes('my') && attempts <= 5) {
        console.log(attempts);
        retry()
      } else {
        fail();
      }
    }   
  }))
  .mount('#app');