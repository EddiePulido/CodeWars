function multiTable(n) {
  let arr = []
  
  for(let i = 1; i <= 10; i++){
    arr.push(`${i} * ${n} = ${i*n}`)
  }
  
  return arr.join('\n')
}