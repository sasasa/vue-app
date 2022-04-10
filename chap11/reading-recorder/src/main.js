import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

const app = createApp(App)

app.config.globalProperties.$http = (url, opts) => fetch(url, opts)

installElementPlus(app)
app.use(store).use(router).mount('#app')