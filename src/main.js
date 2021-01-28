/*
 * @Author: xautshuanglong
 * @Date: 2021-01-28 00:58:16
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-28 14:25:48
 * @FilePath: \shuanglong_admin\src\main.js
 * @Description: main javascript
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'

locale.use(lang)

createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
