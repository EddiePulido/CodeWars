function jumpingNumber(n){
  const str = n.toString()
  
  const j = 'Jumping!!'
  const no = 'Not!!'
  
  if(str.length === 1) return j
  
  for(let i = 0; i < str.length - 1; i++){
    if(Math.abs(str[i] - str[i+1]) !== 1) return no
  }
  
  return j
}