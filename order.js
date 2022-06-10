function order(words){
  const arr = words.split(' ')
  
  let results = new Array(arr.length)
  
  const nums = '132456789'
  
  for(let i = 0; i < arr.length; i++){
    let idx = nums.split('').filter(n => arr[i].includes(n))[0]
    results[Number(idx-1)] = arr[i]
  }
  
  return results.join(' ')
}