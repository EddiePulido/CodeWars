function missingWord(nums, str) {
  str = str.split(' ').join('')
  if(Math.max(...nums) >= str.length) return 'No mission today'
  return nums.sort((a,b) => a - b).map(e => str[e]).join('').toLowerCase()
}