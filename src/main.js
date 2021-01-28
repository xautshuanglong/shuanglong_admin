/*
 * @Author: xautshuanglong
 * @Date: 2021-01-28 00:58:16
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-28 15:29:33
 * @FilePath: \shuanglong_admin\src\main.js
 * @Description: main javascript
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../element-variables.scss'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'
import ElementPlus from 'element-plus'

locale.use(lang)

const vueInstance = createApp(App)
vueInstance.use(store)
vueInstance.use(router)
vueInstance.use(ElementPlus)
vueInstance.mount('#app')
