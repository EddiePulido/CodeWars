function createTwoSetsOfEqualSum(n) {
  const sum = n * (n + 1) / 2
  if(sum % 2) return []
  
  let half = sum / 2
  
  const arr1 = []
  const arr2 = []
  
  for(let i = n ; i > 0; i--){
    if(i <= half){
      arr1.push(i)
      half -= i
    }else{
      arr2.push(i)
    }
  }
  
  return [arr1, arr2]
}