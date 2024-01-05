const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = {}
  
  for([a,b] of edges){
    if(!(a in graph)) graph[a] = []
    if(!(b in graph)) graph[b] = []
    
    graph[a].push(b)
    graph[b].push(a)
  }
  
  const visited = new Set()
  
  const stack = [ nodeA ]
  
  while(stack.length){
    const curr = stack.pop()
    visited.add(curr)
    
    if(curr === nodeB) return true
    for(edge of graph[curr]){
      if(!visited.has(edge)) stack.push(edge)
    }
  }
  
  return false
  
};
