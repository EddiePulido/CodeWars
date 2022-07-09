function pairs(arr){
  
  console.log({arr})
 
  let count = 0
  
  for(let i = 0; i < arr.length-1; i+=2){
    if(arr[i] + 1 === arr[i + 1] || arr[i] - 1 === arr[i + 1]) count++
  }
  
  return count
};