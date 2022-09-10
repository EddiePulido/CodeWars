function countChar(s, c) {
  return s.split('').reduce((a,k) => k.toLowerCase() === c.toLowerCase() ? a + 1 : a, 0)
}