/*
 * @Author: xautshuanglong
 * @Date: 2021-01-28 00:58:16
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-28 14:12:19
 * @FilePath: \shuanglong_admin\src\main.js
 * @Description: main javascript
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

createApp(App)
    .use(store)
    .use(router)
    .use(ElementUI)
    .mount('#app')
