var paintLetterboxes = function(start, end) {
  const hash = {}
  
  for(let i = start; i <= end; i++){
    let nums = i.toString().split('')
    for(let j = 0; j < nums.length; j++){
      hash[nums[j]] = ++hash[nums[j]] || 1
    }
  }

  const arr = [0,0,0,0,0,0,0,0,0,0].map((e,i) => hash[i.toString()] ? hash[i.toString()] : 0)

  return arr
}
