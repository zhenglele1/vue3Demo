import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import { ElMessage } from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './index.css'

const app = createApp(App);
app.use(ElMessage);
app.use(router);
app.mount('#app');