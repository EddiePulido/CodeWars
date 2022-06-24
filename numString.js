function getNumberFromString(s) {
  let nums = '0123456789'
  return Number(s.split('').filter(c => nums.includes(c)).join(''))
}