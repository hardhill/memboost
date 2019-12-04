export const state = () => ({
  counter: 0,
  sessioninfo:{
    sessionid:0,
    username:'',
    logined:false
  },
  
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  setlogined(state,data){
    state.sessioninfo.logined = data
  },
  setusername(state,data){
    state.sessioninfo.username = data
  },
  clearsession(state){
    state.sessioninfo = {
      sessionid:0,
      username:'',
      logined:false
    }
  }
}

export const getters = {
  GET_LOGINED(state){
    return state.sessioninfo.logined
  },
  GET_USERNAME(state){
    return state.sessioninfo.username
  }
}

export const actions = {
  actlogoff(context,payload){
    context.commit('setlogined',payload)
    if(!payload)
    context.commit('clearsession')
    
  },
  actsetusername(context,payload){
    context.commit('setusername',payload)
  }
  
}
