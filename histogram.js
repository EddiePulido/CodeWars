function histogram(results) {
  let result = ''
  
  for(let i = 6; i > 0; i--){
    const roll = results[i-1]
    result += (`${i}|${'#'.repeat(roll)}${roll ? ' ' + roll : ''}\n`)
  }

  return result
}