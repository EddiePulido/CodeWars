function countLettersAndDigits(input) {
  const a = 'abcdefghijklmnopqrstuvwxyz0123456789'
  return [...input.toLowerCase()].filter(c => a.includes(c)).length
}