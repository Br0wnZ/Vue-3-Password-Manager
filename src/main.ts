import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import loggedIn from './layouts/loggedIn.vue'

createApp(App).use(router).use(createPinia).component('loggedIn', loggedIn).mount('#app')
