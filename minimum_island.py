def minimum_island(grid):
  visited = set()
  currMin = float("inf")
  
  for r in range(len(grid)):
    for c in range(len(grid[0])):
      if(pos(r,c) not in visited and grid[r][c] == 'L'):
        currMin = min(currMin, islandSize(grid, r, c, visited))
        
  return currMin

  
  
def pos(r,c):
  return f"{r},{c}"

def inRange(g,r,c):
  return r >= 0 and r < len(g) and c >=0 and c < len(g[0])

def islandSize(grid, r, c, visited):
  if not inRange(grid,r,c) or grid[r][c] == 'W':
    return 0
  
  if pos(r,c) in visited:
    return 0
  
  visited.add(pos(r,c))
  
  size = 1
  
  positions = [
    (r+1,c),
    (r-1,c),
    (r,c-1),
    (r,c+1)
  ]
  
  for row,col in positions:
    size += islandSize(grid, row, col, visited)
  
  return size
      
      