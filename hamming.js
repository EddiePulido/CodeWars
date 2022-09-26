function hammingDistance (a, b) {
  return a.split('').reduce((acc, c, i) => {
    if(c != b[i]) return ++acc
    return acc
  }, 0)
}