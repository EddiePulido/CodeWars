def undirected_path(edges, node_A, node_B):
  graph = {}
  visited = set()
  
  for edge in edges:
    a = edge[0]
    b = edge[1]

    if not a in graph:
      graph[a] = []

    if not b in graph:
      graph[b] = []

    graph[a].append(b)
    graph[b].append(a)

  return _undirected_path(graph, node_A, node_B, visited)

  
def _undirected_path(graph, src, dst, visited):
  if src == dst:
    return True

  visited.add(src)

  for neighbor in graph[src]:
    if not neighbor in visited and _undirected_path(graph, neighbor, dst, visited):
      return True

  return False