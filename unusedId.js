function nextId(ids){
  
  ids.sort((a,b) => a - b)
  
  if(ids[0] != 0) return 0
  
  for(let i = 0; i < ids.length - 1; i++){
    if(ids[i] != ids[i + 1] && ids[i] + 1 != ids[i + 1]) return ids[i] + 1
  }
  
  return ids[ids.length-1] + 1
}