var maxSubArray = function(nums) {
  let currMax = nums[0]
  let max = currMax

  for(let i = 1; i < nums.length; i++){
      let tempMax = currMax + nums[i]
      currMax = Math.max(nums[i], tempMax)
      max = Math.max(max, currMax)
  }
  return max
};
