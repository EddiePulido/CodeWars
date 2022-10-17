function matrixAddition(a, b){
  let result = []
  
  for(let i = 0; i < a.length; i++){
    let sum = (+a[i].join('') + +b[i].join('')).toString().split('').map(e => +e)
    result.push(sum)
  }
  
  return result
}