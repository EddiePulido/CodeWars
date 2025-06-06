const islandCount = (grid) => {
  const visited = new Set()
  let count = 0
  
  for(let row = 0; row < grid.length; row++){
    for(let col = 0; col < grid[row].length; col++){
      if(explore(grid, row, col, visited)) count++
    }
  }
  
  return count
};
  
const explore = (grid, r, c, visited) => {
  const inRow = 0 <= r && r < grid.length
  const inCol = 0 <= c && c < grid.length
  
  if(!inRow || !inCol) return false
  if(grid[r][c] === 'W') return false  
  
  const pos = `${r},${c}`
  if(visited.has(pos)) return false
  visited.add(pos)
  
  explore(grid, r-1, c, visited)
  explore(grid, r+1, c, visited)
  explore(grid, r, c-1, visited)
  explore(grid, r, c+1, visited)
  
  return true
}