function solution(n){
  const remain = n % 1
  const num = parseInt(n)
  
  if(remain >= .25 && remain < .75) return num + .5
  if(remain < .25) return num
  return num + 1
}