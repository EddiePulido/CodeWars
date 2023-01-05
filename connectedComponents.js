const connectedComponentsCount = (graph) => {
  let count = 0
  const visited = new Set()
  
  for(key in graph){ 
    if(!visited.has(+key)){
      const stack = [ +key ]
    
      while(stack.length){
        const curr = stack.pop()
        visited.add(+curr)

        for(neighbor of graph[curr]){
          if(!visited.has(+neighbor)) stack.push(+neighbor)
        }
      }
      
      count += 1
    }
  }
  
  return count
};