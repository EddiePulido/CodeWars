def shortest_path(edges, node_A, node_B):
  graph = {}
  visited = set()
  
  for a,b in edges:
    if not a in graph:
      graph[a] = []
      
    if not b in graph:
      graph[b] = []
      
    graph[a].append(b)
    graph[b].append(a)
    
  queue = [ (node_A, 0) ]
  
  while queue:
    curr, dist = queue.pop(0)
    
    if curr == node_B:
      return dist
    
    visited.add(curr)
    
    for neighbor in graph[curr]:
      if not neighbor in visited:
        queue.append((neighbor, dist + 1))
      
      
  
  return -1
      
      
    