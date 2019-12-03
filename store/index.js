export const state = () => ({
  counter: 0,
  username:'Admin',
  logined: false
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const getters = {
  GET_LOGINED(state){
    return state.logined
  }
}
