const digitSum = parseInt(readline());

const front = digitSum % 9 || ''
const back = '9'.repeat(Math.floor(digitSum/9))
console.log((front + back) || 0)
