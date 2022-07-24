/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-07-24 17:08:20
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-07-24 17:25:33
 */


import type { RouteRecordRaw, RouteMeta } from 'vue-router';
import { defineComponent } from 'vue';
import { Recordable } from 'types/global';


export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);



// export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
//   name: string;
//   meta: RouteMeta;
//   component?: Component | string;
//   components?: Component;
//   // children?: AppRouteRecordRaw[];
//   props?: Recordable;
//   fullPath?: string;
// }