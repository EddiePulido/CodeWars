const hasPath = (graph, src, dst) => {
  if(src === dst) return true
  
  for(node of graph[src]){
    if(hasPath(graph, node, dst)) return true
  }
  
      return false
}

const hasPath = (graph, src, dst) => {
  const queue = [ src ]
  
  while(queue.length){
    const curr = queue.shift()
    
    if(curr === dst) return true
    
    for(neighbor of graph[curr]){
      queue.push(neighbor)
    }
  }
  
  return false
}