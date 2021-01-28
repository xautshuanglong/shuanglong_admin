/*
 * @Author: xautshuanglong
 * @Date: 2021-01-28 00:58:16
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-28 10:08:16
 * @FilePath: \shuanglong_admin\src\main.js
 * @Description: main javascript
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
