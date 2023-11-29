import './assets/style.css'

import { createApp } from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import App from './App.vue'
import router from './router'
import { store } from './utils/libs/vuex/store'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueSweetalert2)
app.config.globalProperties.filters = {
  formatMoney(value) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(value)
  },
  str_limit(value, size) {
    if (!value) return ''
    value = value.toString()

    if (value.length <= size) {
      return value
    }
    return value.substr(0, size) + '...'
  }
}

app.mount('#app')
