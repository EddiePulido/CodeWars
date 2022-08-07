function solve(s){
  const v = 'aeiou'
  
  let max_len = 0
  
  let i = 0;
  let j = 0;
  
  while(j < s.length){
    if(v.includes(s[j])){
      if((j - i) > max_len){
        max_len = (j - i)
      }
      j++
    }else{
      j++
      i = j
    }
  }
  
  return max_len + 1
  
}