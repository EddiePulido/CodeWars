function findOdd(A) {
  const map = {}
  
  A.forEach(num => {
    map[num] ? map[num]++ : map[num] = 1
  })
  
  let result = 0
  
  Object.entries(map).forEach(pair => {
    if(pair[1] % 2 === 1){
      result = pair[0]
    }
  })
  
  return Number(result)
}