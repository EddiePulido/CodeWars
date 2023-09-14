function charConcat(s){
  let str = ''
  let i = 0
  let j = s.length - 1
  
  while(i < j) str += s[i++] + s[j--] + i
  
  return str
}