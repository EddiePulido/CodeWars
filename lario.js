function pipeFix(numbers){
  const arr = []
  const first = numbers[0]
  const last = numbers.slice(-1)[0]
  
  for(let i = first; i <= last; i++) arr.push(i)
  
  return arr
}