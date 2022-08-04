const tribonacci = (signature, n) => {
  // create empty array
  // iterate through signature
  // add signature to empty array
  // push signature sum -> next #
  
  let tribArr = []
  if (n == 0) return tribArr
  if (n == 1) return [signature[0]]

  if(n <= 3){
    let arr = []
    for(let i = 0; i < n; i++){ 
      arr.push(signature[i])
    } 
    return arr
  }

  tribArr = [...signature]
  tribArr = [...tribArr, signature.reduce((acc, curr) => (acc += curr), 0)]

  for (let i = 0; i < n - 4; i++) {
      let nextNum =
          tribArr[tribArr.length - 1] +
          tribArr[tribArr.length - 2] +
          tribArr[tribArr.length - 3]
      tribArr = [...tribArr, nextNum]
  }

  return tribArr
}