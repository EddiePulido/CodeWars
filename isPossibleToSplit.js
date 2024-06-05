var isPossibleToSplit = function(nums) {
  return nums.reduce((a,c) => {
      a[c] = ++a[c] || 1
      if(a[c] > 2) a.bool = false
      return a
  } ,{bool: true}).bool
};