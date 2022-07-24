/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-07-24 00:48:18
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-07-24 17:32:10
 */
import {  createRouter, createWebHashHistory} from 'vue-router';
import type { App } from 'vue';
import {routes} from './routes/index'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes,
})
// export const router = createRouter({
//   // 创建一个 hash 历史记录。
//   history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
//   // 应该添加到路由的初始路由列表。
//   routes: basicRoutes as unknown as RouteRecordRaw[],
//   // 是否应该禁止尾部斜杠。默认为假
//   strict: true,
//   scrollBehavior: () => ({ left: 0, top: 0 }),
// });
// config router
// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router);
}