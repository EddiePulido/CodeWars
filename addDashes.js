const addDashes = (num) => {
  const digits = num.toString()
  
  const result = []
  let prev
  
  for(const digit of digits){
    if(digit % 2 === 0 && prev % 2 === 0){
      result.push('-' + digit)
    }else{
      result.push(digit)
    }
    prev = digit
  }

  return result.join('')
}