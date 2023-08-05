const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = {}
  
  for([a,b] of edges){
    graph[a] = graph[a]?.concat(b) || [ b ]
    graph[b] = graph[b]?.concat(a) || [ a ]
  }
  
  return hasPath(graph, nodeA, nodeB, new Set())
};

const hasPath = (graph, src, dst, visited) => {
  if(src === dst) return true
  visited.add(src) 
  
  for(node of graph[src]){
    if(!visited.has(node) && hasPath(graph, node, dst, visited)) return true
  }
  
  return false
}