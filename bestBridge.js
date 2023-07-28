const bestBridge = (grid) => {
  let island
  let pos = ''
  for(let row = 0; row < grid.length; row++){
    for(let col = 0; col < grid[0].length; col++)
      if(grid[row][col] === 'L'){
        const potentialIsland = traverseIsland(grid, row, col, new Set())
        if(potentialIsland.size > 0){
          island = potentialIsland
          break;
        }
      }
  }
  
  const queue = []
  const visited = new Set(island)
  
  for(let pos of island){
    const [r,c] = pos.split(',').map(Number)
    queue.push([r,c,0])
  }
  
  while(queue.length){
    const [r,c,dist] = queue.shift()
    const p = `${r},${c}`
    
    if(!island.has(p) && grid[r][c] === 'L') return dist - 1
    
    const spaces = [[r-1,c], [r+1,c], [r,c+1], [r,c-1]]
    for([row,col] of spaces){
      const pos = `${row},${col}`
      if(isInBounds(grid,row,col) && !visited.has(pos)){
        visited.add(pos)
        queue.push([row,col,dist+1])
      }
    }
  }
  return -1
};

const isInBounds = (grid, r, c) => {
  const inRow = 0 <= r && r < grid.length
  const inCol = 0 <= c && c < grid[0].length
  
  return inCol && inRow
}

const traverseIsland = (grid, r, c, visited) => {
  if(!isInBounds(grid, r, c) || grid[r][c] === 'W') return visited
  
  const pos = [r,c]
  
  if(visited.has(pos.join())) return visited
  visited.add(pos.join())
  
  traverseIsland(grid, r - 1, c, visited)
  traverseIsland(grid, r + 1, c, visited)
  traverseIsland(grid, r, c - 1, visited)
  traverseIsland(grid, r, c + 1, visited)
  
  return visited
}