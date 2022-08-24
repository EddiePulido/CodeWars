function numObj(s){
  const arr = []
  
  console.log({s})
  
  for(let i = 0; i < s.length; i++){
    const hash = {}
    hash[s[i]] = String.fromCharCode(s[i])
    arr.push(hash)
  }

  return arr
}