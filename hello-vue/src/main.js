import { createApp } from 'vue'
import App from './App.vue'
import HelloAPI from "./Services/HelloAPI"

let app = createApp(App)

app.config.globalProperties.$hello_api = HelloAPI

app.mount('#app')
