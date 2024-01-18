def island_count(grid):
  visited = set()
  count = 0
  
  for row in range(len(grid)):
    for col in range(len(grid[0])):
      if grid[row][col] == 'L' and pos(row,col) not in visited:
        exploreIsland(grid, row, col, visited)
        count += 1
  
  return count
def pos(r,c):
  return f"{r},{c}"

def inRange(grid, r, c):
  return r >= 0 and r < len(grid) and c >= 0 and c < len(grid[0])

def exploreIsland(grid, r, c, visited):
  if not inRange(grid,r,c):
    return False
  if grid[r][c] == 'W':
    return False
  if pos(r,c) in visited:
    return False
  
  visited.add(pos(r,c))
  
  positions = [
    (r-1, c),
    (r+1, c),
    (r, c+1),
    (r, c-1)
  ]
  
  for row,col in positions:
    exploreIsland(grid, row, col, visited)
  