function roundIt(n){
  const str = n.toString()
  const left = str.slice(0,str.length / 2)
  const right = str.length % 2 ? str.slice(str.length / 2 + 1) : str.slice(str.length / 2)
  
  
  if(left.includes('.')) return Math.ceil(n)
  if(right.includes('.')) return Math.floor(n)
  return Math.round(n)
}