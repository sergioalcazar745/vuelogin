import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
import { globalCookiesConfig } from "vue3-cookies";

globalCookiesConfig({
  expireTimes: "30d",
  path: "/",
  domain: "",
  secure: true,
  sameSite: "None",
});

createApp(App).use(router).mount('#app')
