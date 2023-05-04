function isOddHeavy(nums){
  const hasOdd = arr => !!arr.find(e => e % 2)
  
  const odds = nums.filter(e => e % 2)
  const evens = nums.filter(e => !(e % 2))
  
  return hasOdd(nums) && Math.min(...odds) > Math.max(...evens)
}