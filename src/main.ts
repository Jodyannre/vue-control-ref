import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue3-lazyload'

createApp(App).use(router).use(VueLazyload, {}).mount('#app')
