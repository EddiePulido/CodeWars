function slicesToName(n) {
  if(typeof n !== 'number' || n < 2) return null
  const arr = []
  
  if(n % 2){
    arr.push('bread sandwich')
    n -= 3
  }
  
  for(let i = 0; i < n; i+=2){
    arr.push('sandwich')
  }
  
  return arr.join(' ')
}

function nameToSlices(name) {
  if(typeof name !== 'string' || !name.includes('sandwich')) return null
  const arr = name.split(' ')
  
  if(arr.slice(1).some(e => e !== 'sandwich')) return null
  
  return +(arr[0] === 'bread') + arr.reduce((a,c) => c === 'sandwich' ? a + 2 : a, 0)                   
}

