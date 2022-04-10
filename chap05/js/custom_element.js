const app = Vue.createApp({});
app.config.compilerOptions.isCustomElement = tag => tag.startsWith('my-');
app.mount('#app');