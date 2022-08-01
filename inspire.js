function longestWord(words){
  let word = ''
  let max = 0
  
  for(w of words.split(' ')){
    if(max <= w.length){
      word = w
      max = w.length
    }
  }
  
  return word
}