var maxSubArray = function(nums) {
  let currMax = nums[0]
  let maxes = [currMax]

  for(let i = 1; i < nums.length; i++){
      let tempMax = currMax + nums[i]
      if(nums[i] > tempMax){
          currMax = nums[i]
      }else{
          currMax = tempMax
      }
      maxes.push(currMax)
  }
  console.log(maxes)
  return Math.max(...maxes)
};