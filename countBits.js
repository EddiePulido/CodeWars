const countBits = function(n) {
  let bin = n.toString(2).split('')
  return bin.reduce((a,c) =>{
    if(c === '1') return a + 1
    return a
  }, 0)
};