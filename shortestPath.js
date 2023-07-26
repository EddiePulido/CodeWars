const shortestPath = (edges, nodeA, nodeB) => {
  const graph = {}
  
  for([a,b] of edges){
    graph[a] = graph[a]?.concat(b) || [ b ]
    graph[b] = graph[b]?.concat(a) || [ a ]
  }
  
  const queue = [ [nodeA, 0] ]
  const set = new Set()
  
  while(queue.length){
    const [curr, dist] = queue.shift()
    set.add(curr)
    if(curr == nodeB) return dist
    
    for(neighbor of graph[curr]){
      if(!set.has(neighbor)) queue.push([neighbor, dist+1])
    }
    
    
  }
  
  return -1
};