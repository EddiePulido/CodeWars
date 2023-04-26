function solve(input){
  const result = []
  const operations = input.split('\n').map(e => e.split(' '))
  
  for(op of operations){
    let carries = 0
    let carry = 0
    
    const n1 = [...op[0]].reverse().join('')
    const n2 = [...op[1]].reverse().join('')
    
    for(let i = 0; i < n1.length; i++){
      let sum = +n1[i] + +n2[i] + carry
      
      if(sum > 9){
        carry = 1
        carries++
      }else{
        carry = 0
      }
      
    }
    
    result.push(carries ? `${carries} carry operations` : 'No carry operation')
  }
  
  return result.join('\n')
}