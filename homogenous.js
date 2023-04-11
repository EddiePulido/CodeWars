function filterHomogenous(arr) {
  return arr.filter(a => a.length && a.every(e => typeof e === typeof a[0]))
}