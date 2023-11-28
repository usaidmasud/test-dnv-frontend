import { createStore } from 'vuex'
import { rootModule } from './modules/root.module'

export const store = createStore({
  modules: {
    rootModule: rootModule
  }
})
