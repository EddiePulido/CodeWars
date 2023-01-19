function solution(str,limit){
  if(str.length <= limit) return str
  return str.slice(0,limit) + '...'
}

const solution = (s,l) => s.length <= l ? s : `${s.slice(0,l)}...`