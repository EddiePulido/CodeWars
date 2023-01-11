function mean(lst){
  const nums = lst.filter(e => !isNaN(e))
  const lets = lst.filter(e => isNaN(e))
  
  const avg = nums.reduce((a,c) => a + +c, 0)/nums.length
  return [avg, lets.join('')]
}