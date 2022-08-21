function maxMultiple(divisor, bound){
  let n = 0
  
  for(let i = 1; i <= bound; i++)
    if(i % divisor === 0) n = i 
  
  return n
  
}