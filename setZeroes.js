var setZeroes = function(matrix) {
  const rows = new Set()
  const cols = new Set()
  const m = matrix.length
  const n = matrix[0].length
  
  for(let i = 0; i < m; i++){
      for(let j = 0; j < n; j++){
          if(matrix[i][j] === 0){
              rows.add(i)
              cols.add(j)
          }
      }
  }
  
  
  rows.forEach(row => {
      matrix[row] = new Array(n).fill(0)
  })
  
  cols.forEach(col => {
      for(let i = 0; i < m; i++){
          matrix[i][col] = 0
      }
  })
  
  return matrix
  
};