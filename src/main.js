import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { api, otaku } from './axios';

const app = createApp(App);
app.config.globalProperties.$otaku = otaku;
app.config.globalProperties.$api = api;
app.use(store).use(router).mount('#app')
