import Toast from "vue-toastification/dist/index.mjs";
import "vue-toastification/dist/index.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

app.use(Toast, {
  position: "top-right",
  timeout: 3000
});
