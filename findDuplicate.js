const findDup = arr => {
  const set = new Set()
  
  for(num of arr){
    if(set.has(num)) return num
    set.add(num)
  }
  
  return false
}