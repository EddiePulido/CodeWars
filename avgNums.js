function averages(nums) {
  if(!nums || nums.length <= 1) return []
  
  let arr = []
  
  for(let i = 0; i < nums.length - 1; i++){
    arr.push((nums[i] + nums[i+1]) / 2)
  }
  
  return arr
}