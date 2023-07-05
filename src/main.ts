/*
 * @FilePath: main.ts
 * @Author: lianxin wsl1933467270@gmail.com
 * @Date: 2023-06-05 19:46:03
 * @LastEditors: lianxin wsl1933467270@gmail.com
 * @LastEditTime: 2023-06-29 10:13:27
 * Copyright (c) 2023 by ${git_name} email: ${git_email}, All Rights Reserved.
 * @Descripttion:
 */
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)
app.mount('#app')
