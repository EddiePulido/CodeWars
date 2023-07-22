const semestersRequired = (numCourses, prereqs) => {
  const graph = {}
  const dist = {}
  let max = 0
  
  for([a, b] of prereqs){
    graph[a] = graph[a]?.concat(b) || [b]
  }
  
  for(let i = 0; i < numCourses; i++){
    if(!(i in graph)){
      graph[i] = []
      dist[i] = 1
    }
    
  }
  
  for(node in graph){
    max = Math.max(traverseDistance(graph, node, dist),max)
  }
  
  return max
};

  
const traverseDistance = (graph, node, distance) => {
  if(node in distance) return distance[node]
  
  let maxLength = 0
  for(neighbor of graph[node]){
    const attempt = traverseDistance(graph, neighbor, distance)
    maxLength = Math.max(maxLength, attempt)
  }
  
  distance[node] = 1 + maxLength
  return distance[node] 
}