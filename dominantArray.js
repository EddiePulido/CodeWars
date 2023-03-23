function solve(arr){
  const result = []
  
  for(let i = 0; i < arr.length; i++){
    const num = arr[i]
    if(num > Math.max(...arr.slice(i+1),0)){
      result.push(num)
    }
  }
  return result
};