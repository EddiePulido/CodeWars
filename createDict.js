function createDict(keys, values){
  const hash = {}
  
  for(let i = 0; i < keys.length; i++){
    let v = values[i] === undefined ? null : values[i]
    hash[keys[i]] = v
  }
  
  return hash
}