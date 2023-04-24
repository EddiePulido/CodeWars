function maxSumBetweenTwoNegatives(a) {
  let first = a.findIndex(e => e < 0)
  let second = 0
  const arr = []
  
  for(let i = first+1; i < a.length;i++){
    if(a[i] < 0){
      second = i
      arr.push(a.slice(first+1,second).reduce((b,c) => b + c, 0))
      first = i
    }
  }
  
  return Math.max(...arr,-1)
}