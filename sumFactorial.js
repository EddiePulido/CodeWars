function sumFactorial(arr){
  let fac = 1
  const results = []
  for(n of arr){
    for(let i = 1; i <= n; i++){
     fac *= i 
    }
    results.push(fac)
    fac = 1
  }
  
  return results.reduce((a,c) => a + c, 0)
}

function sumFactorial(arr){
  return arr.reduce((a,c) => {
    let p = 1
    for(let i = 2; i <= c; i++) p *= i
    
    return a + p
  },0)
}