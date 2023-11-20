const connectedComponentsCount = (graph) => {
  const visited = new Set()
  let count = 0
  
  for(key in graph){
    if(!visited.has(+key)){
      const stack = [ +key ]
      
      while(stack.length){
        const curr = stack.pop()
        visited.add(curr)
        
        for(neighbor of graph[curr]){
          if(!visited.has(neighbor)) stack.push(neighbor)
        }
      }
      
      count++
    }
    
    
    
  }
  
  return count
}