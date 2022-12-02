var containsDuplicate = function(nums) {
  const count = {}
  for(num of nums){
      if(count[num]) return true
      else count[num] = 1
  }

  return false
};