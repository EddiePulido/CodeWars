function averageLength(arr) { 
  let avg = Math.round(arr.reduce((a,c) => a + c.length, 0) / arr.length)
  return arr.map(w => w[0].repeat(avg))
}