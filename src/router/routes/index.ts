/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-07-24 16:26:15
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-07-24 17:42:53
 */
import type { RouteRecordRaw } from 'vue-router';
// import type { AppRouteRecordRaw } from '../types'
// 根路由
export const RootRoute = {
  path: '/',
  name: 'hello world',
  // redirect: '/',
  meta: {
    title: 'hello world',
  },
};

export const LoginRoute = {
  path: '/login',
  name: 'Login',
  component: () => import('@/pages/Login.vue'),
  meta: {
    title: '登录页',
  },
}

export const editorRoute = {
  path: '/editor',
  name: 'Editor',
  component: () => import('@/pages/Editor.vue'),
  meta: {
    title: '编辑页',
  },
}

export const routes = [
  LoginRoute,
  RootRoute,
  editorRoute
];

