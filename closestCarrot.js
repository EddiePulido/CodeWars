const closestCarrot = (grid, startRow, startCol) => {
  let pos = [startRow, startCol]
  const visited = new Set()
  const queue = [[pos, 0]]
  
  while(queue.length){
    const [[r,c], dist] = queue.shift()
 
    const up = [r-1, c]
    const down = [r+1, c]
    const right = [r, c+1]
    const left = [r, c-1]
    
    if(inRange(grid,...up)){
      if(grid[r-1][c] === 'C') return dist + 1
      if(!visited.has(up.join()) && grid[r-1][c] === 'O') queue.push([[r-1,c], dist+1])
      visited.add(up.join())
    }
    if(inRange(grid, ...down)){
      if(grid[r + 1][c] === 'C') return dist + 1
      if(!visited.has(down.join()) && grid[r+1][c] === 'O') queue.push([[r+1,c], dist+1])
      visited.add(down.join())
    }
    if(inRange(grid, ...right)){
      if(grid[r][c+1] === 'C') return dist + 1   
      if(!visited.has(right.join()) && grid[r][c+1] === 'O') queue.push([[r,c+1], dist+1])
      visited.add(right.join())
    }
    if(inRange(grid, ...left)){
      if(grid[r][c-1] === 'C') return dist + 1  
      if(!visited.has(left.join()) && grid[r][c-1] === 'O') queue.push([[r,c-1], dist+1])
      visited.add(left.join())
    }
  }

  
  return -1
};

const inRange = (grid, r, c) => {
  const inRow = 0 <= r && r < grid.length;
  const inCol = 0 <= c && c < grid[0].length;
  
  return inRow && inCol
}