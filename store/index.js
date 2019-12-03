export const state = () => ({
  counter: 0,
  username:'Admin',
  logined: false
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  setlogined(state,data){
    state.logined = data
  }
}

export const getters = {
  GET_LOGINED(state){
    return state.logined
  }
}

export const actions = {
  actlogoff(context,payload){
    context.commit('setlogined',payload)
  }
}
