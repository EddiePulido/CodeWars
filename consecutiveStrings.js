function longestConsec(strarr, k) {
  let longest = 0
  let result = ''
  
  for(let i = 0; i <= strarr.length - k; i++){
    let word = ''
    for(let j = i; j < i + k; j++){
      word += strarr[j]
    }
    if(longest < word.length){
      longest = word.length
      result = word      
    } 
  }
  
  return result
}