const fiveSort = (nums) => {
  let i = 0;
  let j = nums.length - 1
  
  while(i < j){
    if(nums[j] === 5){
      j--
    }else if(nums[i] !== 5){
      i++
    }else{
      nums[i] = nums[j]
      nums[j] = 5
    }
  }
  
  return nums
};
const fiveSort = (nums) => {
  let i = 0
  let j = nums.length - 1

  while(i < j){
    if(nums[j] === 5){
      j--
    }else{
      if(nums[i] === 5){
        nums[i] = nums[j]
        nums[j] = 5
      }

      i++
    }
  }

  return nums
};