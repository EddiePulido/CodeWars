def connected_components_count(graph):
  visited = set()
  count = 0
  
  for node in graph:
    if not node in visited:
      exploreGraph(graph, node, visited)
      count += 1
      
  return count
      
      
def exploreGraph(graph, node, visited):
  if node in visited:
    return False
  
  visited.add(node)
  
  for neighbor in graph[node]:
    exploreGraph(graph, neighbor, visited)
    