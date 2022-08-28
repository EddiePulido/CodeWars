function add(num1, num2) {
  let arr = []
  
  let n1 = num1.toString()
  let n2 = num2.toString()
  let i = n1.length - 1
  let j = n2.length - 1
  
  while(i >= 0 || j >= 0){
    if(i < 0) arr.push(n2[j])
    else if(j < 0) arr.push(n1[i])
    else arr.push(+n1[i] + +n2[j])
       
    i--
    j--
  }
  
  return +arr.reverse().join('')
}