export default {
  get (i) {
    if (i === 3) {
      return '*3*'
    }
    if (i === 2) {
      return '2*'
    }
    if (i === 1) {
      return '*'
    }
    return ''
  }
}
