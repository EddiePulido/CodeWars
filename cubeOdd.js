function cubeOdd(arr) {
  if(arr.filter(e => typeof e !== 'number').length ) return undefined
  return arr.reduce((a,i) => Math.abs(i ** 3) % 2 === 1 ? a + i ** 3 : a + 0, 0)
}