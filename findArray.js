function findArray(arr1, arr2){
  const result = []
  
  for(i of arr2) 
    if(i in arr1) result.push(arr1[i])
  
  return result
}