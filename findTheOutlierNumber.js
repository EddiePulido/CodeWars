function findOutlier(ints){
  const evens = ints.filter(e => e % 2 === 0)
  if(evens.length === 1) return evens.pop()
  
  return ints.find(e => e % 2)
} 