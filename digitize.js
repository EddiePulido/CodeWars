function digitize(n) {
  return n.toString().split('').map(n => +n)
}