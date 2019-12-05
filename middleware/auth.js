export default function ({ store, error }) {
    if (!store.state.sessioninfo.logined) {
      error({
        message: 'You are not connected',
        statusCode: 403
      })
    }
  }