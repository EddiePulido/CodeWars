const minimumIsland = (grid) => {
  const visited = new Set()
  let min = Infinity
  
  for(let r = 0; r < grid.length; r++){
    for(let c = 0; c < grid[0].length; c++){
      const count = explore(grid,r,c,visited)
      if(count) min = Math.min(min, count)
    }
  }
  
  return min
};

const explore = (grid, r, c, visited) => {
  const inRow = 0 <=r && r < grid.length
  const inCol = 0 <= c && c < grid[0].length
  
  if(!inRow || !inCol) return 0
  if(grid[r][c] === 'W') return 0
  
  const pos = `${r},${c}`
  
  if(visited.has(pos)) return 0
  visited.add(pos)
  
  const down = [grid, r + 1, c, visited]
  const up = [grid, r - 1, c, visited]
  const right = [grid, r, c + 1, visited]
  const left = [grid, r, c - 1, visited]
  
  return 1 + explore(...down) + explore(...up) + explore(...left) + explore(...right)
}