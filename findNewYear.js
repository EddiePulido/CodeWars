const happyNewYear2025 = num => {
  const str = num.toString()
  const revStr = [...str].reverse().join('')
  
  const checkYear = str => {
    const goal = '2025'
    let i = 0
    
    for(const digit of str){
      if(digit === goal[i]){
        i++
      }
    }
    
    return i === 4
  }
  
  return checkYear(str) || checkYear(revStr) ? 'Happy New Year!' : 'God bless you!'
}
