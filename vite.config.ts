/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-07-24 00:02:28
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-07-24 16:58:13
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
const resolve = (dir: string) => path.join(__dirname, dir); // 路径


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve('src'),
      "@components": resolve('src/components/'),
    }
  },
  plugins: [vue()]
})
