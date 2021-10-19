import { createApp } from 'vue'
import App from './App.vue'
import router from './store/index.js'
const app = createApp(App);
// 4通过use使用vuex
app.use(router);
app.mount('#app')
