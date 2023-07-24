const connectedComponentsCount = (graph) => {
  const visited = new Set()
  let count = 0
  for(node in graph){
    console.log(visited)
    if(explore(graph, node, visited)) count++
  }
   
   return count
}

const explore = (graph, curr, visited) => {
  if(visited.has(curr.toString())) return false
  
  visited.add(curr.toString())
  
  for(const neighbor of graph[curr]){
    explore(graph, neighbor, visited) 
  }
  
  return true
}