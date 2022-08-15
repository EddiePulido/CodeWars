function save(sizes, hd) {
  let count = 0
  let i = 0
  let sum = 0
  
  while(i < sizes.length){
    const s = sizes[i]
    if(sum + s === hd) return ++count
    if(sum + s > hd) return count
    sum += sizes[i++]
    count++
    
  }
  
  return count
}