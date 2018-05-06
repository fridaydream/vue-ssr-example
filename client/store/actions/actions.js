export default {
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', {num: data.num})
    }, 1000)
  }
}
