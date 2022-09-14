function solution(a, b){
  if(a.length <= b.length)
    return a + b + a
  return b + a + b
}
