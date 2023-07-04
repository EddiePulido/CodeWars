const pairSum = (numbers, target) => {
  const targets = {}
  
  for(let i = 0; i < numbers.length; i++){
    const num = numbers[i]
    if(num in targets){
      return [targets[num], i]
    }else{
      targets[target-num] = i
    }
  } 
  
}