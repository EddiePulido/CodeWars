function rangeBitCount(a, b) {
  let count = 0
  
  for(let i = a; i <= b; i++){
    count += i.toString(2).split('')
      .reduce((acc,c) => c === '1' ? ++acc : acc, 0 )
  }
  
  return count
}