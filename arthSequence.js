function arithmeticSequenceElements(a, d, n) {
	const result = []
  let sum = a
  
  let times = 0
  
  while(times < n){
    result.push(sum)
    sum += d
    times++
  }
  
  return result.join(', ')
}