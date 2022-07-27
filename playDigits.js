function digPow(n, p){
  const num = n.toString()
  let sum = 0
  let result = 0
  let s = 0
  
  for(e of num){
    sum += Math.pow(+e , p++)
  }
  
  while(result < sum){
    result = n * ++s
    if(result === sum) return s
  }
  return -1
}