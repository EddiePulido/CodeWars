productExceptSelf(nums) {
  const result = new Array(nums.length).fill(1)

  for(let i = 1; i < nums.length; i++){
      result[i] = result[i-1] * nums[i-1]
  }

  let postFix = 1

  for(let i = nums.length - 1; i >= 0; i--){
      result[i] *= postFix
      postFix *= nums[i]
  }

  return result
}