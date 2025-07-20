import Toast from "vue-toastification/dist/index.mjs";
import "vue-toastification/dist/index.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Toast, {
  position: "top-right",
  timeout: 3000
})

app.mount('#app')
