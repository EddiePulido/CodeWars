const transposeTwoStrings = arr => {
  const max = Math.max(arr[0].length, arr[1].length)
  let result = []
  
  for(let i = 0; i < max; i++){
    result.push(`${arr[0][i] || ' '} ${arr[1][i] || ' '}`)
  }
  
  return result.join('\n')
} 