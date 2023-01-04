function cyclops(n) {
  const bin = n.toString(2)
  if(!(bin.length % 2)) return false
  return bin[Math.floor(bin.length/2)] == 0 && [...bin].filter(e=>e==1).length == bin.length -1
}