function solution(digits){
  const nums = []
  
  for(let i = 0; i <= digits.length-5; i++){
    nums.push(+digits.slice(i, i+5))
  }
  
  return Math.max(...nums)
}