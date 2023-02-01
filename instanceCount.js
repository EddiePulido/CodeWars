function solution(f, s){
  let count = 0
  
  for(let i = 0; i < f.length; i++){
    if(s === f.slice(i,i+s.length)) count++
  }
  return count
}