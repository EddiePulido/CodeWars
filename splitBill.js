function splitTheBill(x) {
  const values = Object.values(x)
  let avg = +(values.reduce((a,c) => a + c) / values.length).toFixed(2)

  for(k in x) x[k] = +(x[k] - avg).toFixed(2)
  
  return x
}