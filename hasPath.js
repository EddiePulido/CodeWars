const hasPath = (graph, src, dst) => {
  if(src === dst) return true
  
  for(node of graph[src]){
    if(hasPath(graph, node, dst)) return true
  }
  
      return false
}