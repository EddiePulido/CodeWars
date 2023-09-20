function factors(x){
  if(x <= 0 || x % 1 || !Number(x)) return -1
  
  let arr = [ x ]
  
  for(let i = Math.floor(x / 2); i >= 1; i--) !(x % i) && arr.push(i)
      
  return arr
}