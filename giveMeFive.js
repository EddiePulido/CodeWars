function giveMeFive(obj){
  let arr = []
  for(k in obj){
    if(k.length === 5) arr.push(k)
    if(obj[k].length === 5) arr.push(obj[k])
  }
  return arr
}