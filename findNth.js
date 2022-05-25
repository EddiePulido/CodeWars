var findDigit = function(num, nth){
  num = Math.abs(num)
  let str = num.toString()

  if(nth > str.length){
    return 0
  }

  if(nth <= 0){
    return -1
  }
  
  console.log(str.length-nth)

  return parseInt(str[str.length - nth])
    
}