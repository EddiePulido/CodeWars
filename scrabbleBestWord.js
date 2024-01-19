function getBestWord(points,words){
  let max = 0
  let w = ''
    
  for(const word of words){
    let score = [...word].reduce((a,c) => a + points[(c.charCodeAt() - 65)], 0)
    
    if(score > max){
      max = score
      w = word
    }else if(score === max && word.length < w.length){
      w = word
    }
  }
  
  return words.indexOf(w)
  
}