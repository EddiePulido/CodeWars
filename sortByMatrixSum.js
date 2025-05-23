 
  const sums = matrix.map(row => [row, row.reduce((a,c) => a + c, 0)])
  
  sums.sort((a,b) => a[1] - b[1])
  
  return sums.map(([row]) => row)
}