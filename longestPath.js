const longestPath = (graph) => {
  let max = 0
  const dist = {}
  
  for(const node in graph){
    if(!graph[node].length){
      dist[node] = 0
    }
  }
  
  for(const node in graph){
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