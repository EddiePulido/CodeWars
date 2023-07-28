const hasCycle = (graph) => {  
  const visited = new Set()
  const visiting = new Set()
  for(node in graph){
    if(cycleDetect(graph,node,visiting, visited)) return true
  }
    
  return false
};


const cycleDetect = (graph, node, visiting, visited) => {
  if(visiting.has(node)) return true
  visiting.add(node)
  
  for(neighbor of graph[node]){
    if(cycleDetect(graph, neighbor, visiting, visited)){
      return true
    }
  }
  
  visiting.delete(node)
  visited.add(node)
  
  return false
}