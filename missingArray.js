function getLengthOfMissingArray(arrayOfArrays) {
  if(!arrayOfArrays) return 0
  if(arrayOfArrays.some(e => !e)) return 0
  
  arrayOfArrays.sort((a,b) => a.length - b.length)
  
  for(let i = 0; i < arrayOfArrays.length-1; i++){
    if(arrayOfArrays[i] === null || !arrayOfArrays[i].length) return 0
    if(arrayOfArrays[i].length + 1 != arrayOfArrays[i+1].length) return arrayOfArrays[i].length + 1
  }
  
  return 0
}