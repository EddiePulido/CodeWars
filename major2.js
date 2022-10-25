const majorityElement = (nums) => {
  let result, count = 0 
  for(let i = 0; i <nums.length;i++){
      if(count == 0) (ans = nums[i],count = 1)
      else if (ans == nums[i]) count++ 
      else count--      
  }
  return result 
};