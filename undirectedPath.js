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

const undirectedPath = (edges, nodeA, nodeB) => {
  const visited = new Set()
  const graph = {}
  
  for([a,b] of edges){
    if(!graph.hasOwnProperty(a)) graph[a] = []
    if(!graph.hasOwnProperty(b)) graph[b] = []
    
    graph[a].push(b)
    graph[b].push(a)
  }
  
  const stack = [ nodeA ]
  
  while(stack.length){
    const curr = stack.pop()
    
    if(curr === nodeB) return true
    visited.add(curr)
    
    for(neighbor of graph[curr]){
      if(!visited.has(neighbor)) stack.push(neighbor)
    }
  }
  
  return false
}