function missingNo(nums) {
  nums.sort((a,b) => a - b)
  let num;
  
  for(let i = 0; i < nums.length; i++){
    if(i != nums[i]){
      num = i
      break
    }
  }
  
  
  
  return num ? num : 100
}