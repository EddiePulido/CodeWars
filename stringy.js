function stringy(size) {
  return '*'.repeat(size).split('').map((e,i) => i % 2 ? '0' : '1').join('') 
}