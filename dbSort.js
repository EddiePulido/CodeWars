function dbSort(a){
  const nums = a.filter(c => typeof c === 'number').sort((a,b) => a - b)
  const chars = a.filter(c => typeof c !== 'number').sort()
  
  return nums.concat(chars)

}