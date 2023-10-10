function getNum(n) {
  const holes = [1, 0, 0, 0, 0, 0, 1, 0, 2, 1]

  return [...(n+'')].reduce((a,c) => a + holes[+c], 0) 
}