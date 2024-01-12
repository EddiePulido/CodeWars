def largest_component(graph):
  visited = set()
  largest = 0
  
  for node in graph:
    if not node in visited:
      largest = max(largest, component_size(graph, node, visited))
      
  return largest


def component_size(graph, node, visited):
  if node in visited:
    return 0
  
  size = 1
  visited.add(node)
  
  for neighbor in graph[node]:
    size += component_size(graph, neighbor, visited)
  
  
  return size