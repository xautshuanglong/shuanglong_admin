/*
 * @Author: xautshuanglong
 * @Date: 2021-01-28 00:58:16
 * @LastEditor: xautshuanglong
 * @LastEditTime: 2021-01-28 10:23:06
 * @FilePath: \shuanglong_admin\src\router\index.js
 * @Description: router
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WebUI from '../views/WebUI.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/webui',
        name: 'WebUI',
        component: WebUI
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
