function disariumNumber(n){
  const s = n.toString()
  let num = 0
  
  for(let i = 0; i < s.length; i++){
    num += parseInt(s[i]) ** (i + 1)
  }
  
  return n === num ? 'Disarium !!' : 'Not !!'
}