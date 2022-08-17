function isLucky(n) {
  return n.toString().split('').reduce((acc, c) => acc + +c, 0) % 9 === 0
}