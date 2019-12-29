export default function ({ store, redirect }) {
    if (!store.getters.GET_LOGINED) {
      redirect('/login?message=login')
    }
  }
  