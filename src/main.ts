import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import naive from 'naive-ui'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import loggedIn from './layouts/loggedIn.vue'

createApp(App).use(router).use(createPinia).use(naive).component('loggedIn', loggedIn).mount('#app')
