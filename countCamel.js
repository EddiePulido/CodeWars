function camelcase(str) {
  let count = 1
  for(let i = 0; i < str.length; i++){
    if(str[i].toUpperCase() === str[i])
      count++
  }
  
  return count
}