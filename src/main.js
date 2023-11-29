import './assets/style.css'

import { createApp } from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import App from './App.vue'
import router from './router'
import { store } from './utils/libs/vuex/store'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueSweetalert2)

app.mount('#app')
