export default {
  get (i) {
    if (i > 1) return this.previous(i) + '*'
    if (i === 1) return '*'
    else return ''
  },
  previous (i) {
    return this.get(i - String(i).length - 1) + i
  }
}
