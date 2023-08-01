function solution(number){
  const result = [0,0,0]
  
  for(let i = 3; i < number; i++){
    console.log({i, result})
    if(i % 15 === 0) result[2]++
    else if(i % 3 === 0) result[0]++
    else if(i % 5 === 0) result[1]++
  }
   
  return result
} 