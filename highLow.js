function highAndLow(numbers){
  const nums = numbers.split(' ')
  let max = -Infinity
  let min = Infinity
  
  nums.forEach(num =>{
    const n = Number(num)
    if(n > max){
      max = num
    }
    if(n < min){
      min = num
    }
  })
  
  return max + ' ' + min
}