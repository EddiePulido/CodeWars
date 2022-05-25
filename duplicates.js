function duplicates(array){

  array.sort((a,b) => a - b)
  
  let count = 0
  
  for(let i = 0; i < array.length-1; i++){
    if(array[i] === array[i+1]){
      count++
      i++
    }
  }
  
  return count
}