export const state = () => ({
  counter: 0,
  username:'New user',
  logined: false
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  setlogined(state,data){
    state.logined = data
  },
  setusername(state,data){
    state.username = data
  }
}

export const getters = {
  GET_LOGINED(state){
    return state.logined
  },
  GET_USERNAME(state){
    return state.username
  }
}

export const actions = {
  actlogoff(context,payload){
    context.commit('setlogined',payload)
  }
}
