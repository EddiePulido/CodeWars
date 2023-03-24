const mispelled = (w1, w2) =>{
  console.log({w1,w2})
  let count = 0
  
  if(Math.abs(w1.length - w2.length) === 1){
    if(w1.slice(1) === w2) return true
    if(w2.slice(1) === w1) return true
    if(w1.slice(0,-1) === w2) return true
    if(w2.slice(0,-1) === w1) return true
    return false
  }
  
  for(let i = 0; i < w1.length; i++){
    if(w1[i] !== w2[i]) count++
  }
  
  return count <= 1
}

const mispelled = (w1, w2) =>{
  let count = 0
  
  if(Math.abs(w1.length - w2.length) === 1)
    return w1.includes(w2) || w2.includes(w1)
  
  for(let i = 0; i < w1.length; i++)
    if(w1[i] !== w2[i]) count++
  
  return count <= 1
}