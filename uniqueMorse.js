var uniqueMorseRepresentations = function(words) {
  let alpha = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

  let trans = words.map(word => {
      return [...word].map(c =>{
          return alpha[c.charCodeAt() - 97]
      }).join('')
  })

  return (new Set(trans)).size

};