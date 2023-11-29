const largestComponent = (graph) => {
  const visited = new Set()
  let max = 0
  
  for(node in graph){
    max = Math.max(max,exploreNode(graph, node, visited, {c:0}))
  }
  
  return max
};

const exploreNode= (graph, curr, visited, count) => {
  if(visited.has(curr.toString())) return 0
  count.c++
  visited.add(curr.toString())
  
  for(neighbor of graph[curr]){
    exploreNode(graph,neighbor,visited,count)
  }
  
  return count.c
}

const largestComponent = (graph) => {
  const visited = new Set()
  let max = 0
  
  for(node in graph){
    if(!visited.has(node)){
      let size = 0
      const stack = [ node ]

      while(stack.length){
  
        const curr = stack.pop()
        if(!visited.has(curr)){
          visited.add(curr)
          size++

          for(neighbor of graph[curr]){
            if(!visited.has(neighbor)) stack.push(neighbor)
          }
        }
        
      }

      max = Math.max(size, max)
    }
    
  }
  
  return max
}

module.exports = {
  largestComponent,
};
