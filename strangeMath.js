function strangeMath(n, k){
  let arr = []
  
  for(let i = 1; i <= n; i++) arr.push(i)
  
  arr.sort()
  
  return arr.indexOf(k) + 1
  
}