import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import '@/assets/css/global.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import $ from 'jquery'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.config.globalProperties.$url = 'http://127.0.0.1:8080/chat'

app.use(router)
app.use(ElementPlus)
app.mount('#app')
