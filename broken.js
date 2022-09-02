function findMissingNumber(s){
  if(s.length === 0) return 0
  let nums = s.split(' ')
  const digits = '1234567890'
  if(nums.filter(e=>!digits.includes(e[0])).length > 0) return 1
  nums = nums.map(e=>+e).sort((a,b) => a - b)
  if(nums[0] != 1) return 1
  
  
  
  for(let i = 0; i < nums.length-1; i++){
    const next = nums[i] + 1
    if(next != nums[i+1]) return next
  }
  
  return 0
}