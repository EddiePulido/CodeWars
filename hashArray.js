function convertHashToArray(hash){
  const arr = []
  
  for(key in hash) arr.push([key,hash[key]])
  
  return arr.sort()
}