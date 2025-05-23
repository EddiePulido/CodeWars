def has_path(graph, src, dst):
  if src == dst:
    return True
  
  for neighbor in graph[src]:
    if has_path(graph, neighbor, dst):
      return True
    
  return False

def has_path(graph, src, dst):
  if src == dst:
    return True

  for neighbor in graph[src]:
    if has_path(graph, neighbor, dst):
      return True

  return False