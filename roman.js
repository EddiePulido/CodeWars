function solution (roman) {
  const nums = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    }
  
  let sum = 0
  
  for(let i = roman.length - 1; i >= 0; i--){
    let curr = nums[roman[i]]
    let next = nums[roman[i-1]]
    
    if(next < curr){
      sum += curr - next
      i--
    }else{
      sum += curr
    }
  }
  
  return sum
}