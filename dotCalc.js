function dotCalculator (equation) {
	const arr = equation.split(' ')
  const left = arr[0].length
  const op = arr[1]
  const right = arr[2].length
  
  const results = {
    '+' : left + right,
    '-' : left - right,
    '//' : left / right,
    '*' : left * right
  }
  
  return '.'.repeat(results[op])
}