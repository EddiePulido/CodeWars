function findOutlier(ints){
  const evens = ints.filter(n => n % 2 === 0)
  const odds = ints.filter(n => n % 2)
  
  return odds.length === 1 ? odds[0] : evens[0]
}