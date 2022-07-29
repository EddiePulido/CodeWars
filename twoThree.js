function checkThreeAndTwo(array) {
  let hash = {}
  
  array.forEach(e => {
    hash[e] = ++hash[e] || 1
  })
  
  let arr = []
  
  for(k in hash){
    if(hash[k] === 3) arr.push(hash[k])
    if(hash[k] === 2) arr.push(hash[k])
  }
  
  console.log({arr})
  
  return arr.includes(3) && arr.includes(2)
}