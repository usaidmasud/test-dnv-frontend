import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './utils/libs/vuex/store'


const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
