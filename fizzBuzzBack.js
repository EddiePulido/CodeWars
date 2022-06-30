function reverseFizzBuzz(array) {
  let results = []
  let first = true
  let second = true
  let skip = false
  
  console.log({array})
  
  array.forEach((n, i) => {
    if(!skip){
      if(n === 'FizzBuzz' && first && second) {
        results.push(i+1)
        results.push(i+1)
        skip = true
      }else if(first && n === 'Fizz'){
        first = false
        results[0] = (i + 1)
      }else if(typeof n === 'string' && second && n.includes('Buzz')){
        second = false
        results[1] = (i + 1)
      }
    }
  })
  
  return results
};