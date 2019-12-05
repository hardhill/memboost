export default function ({ store, error }) {
    if (!store.getters.GET_LOGINED) {
      debugger
      console.log('Not connected')
      error({
        message: 'You are not connected',
        statusCode: 403
      })
    }else{
      console.log(store.getters.GET_LOGINED)
    }
  }