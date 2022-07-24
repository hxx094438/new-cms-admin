/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hxx
 * @Date: 2022-07-24 00:02:28
 * @LastEditors: Aidam_Bo
 * @LastEditTime: 2022-07-24 18:24:31
 */
import { createApp } from 'vue'
import './style.css'
import 'vant/lib/index.css';
import App from './App.vue'
import { setupRouter } from '@/router';

async function bootstrap() {
  const app = createApp(App)

  setupRouter(app);


  app.mount('#app')
}


bootstrap()