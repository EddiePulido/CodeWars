const sortedSquares = nums => {
  let i = 0
  let j = nums.length - 1
  const result = []
  
  while(i <= j){
      if(Math.abs(nums[i]) > Math.abs(nums[j])){
          result.push(nums[i] ** 2)
          i++
      }else{
          result.push(nums[j] ** 2)
          j--
      }
  }
  
  return result.reverse()
}