export default {
  updateCount (state, {num, num2}) {
    console.log('mutations===', num2)
    state.count = num
  }
}
