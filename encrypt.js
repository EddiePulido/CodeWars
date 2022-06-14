var encryptThis = function(text) {
  return text.split(' ').map(word => {
    if(word.length > 2){
      word = word[0] + word.slice(-1)[0] + word.slice(2, word.length-1) + word[1]
    }
    
    return word[0].charCodeAt() + word.slice(1)
  }).join(' ')
}