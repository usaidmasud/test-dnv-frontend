export const rootModule = {
  nameSpaced: true,
  state() {
    return {
      authenticated: false,
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    setAuthenticate(state, payload) {
      state.authenticated = payload
    }
  },
  actions: {
    increment(context, payload) {
      context.commit('increment', payload)
    }
  },
  getters: {
    IsAuthenticated(state) {
      return state.authenticated
    }
  }
}
