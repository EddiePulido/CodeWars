function decipherThis(str) {
  const getCC = (s) => isNaN(s.slice(0,3)) ?  String.fromCharCode(Number(s.slice(0,2))) + s.slice(2) : String.fromCharCode(Number(s.slice(0,3))) + s.slice(3)

  const words = str.split(' ')
  let results = []

  words.forEach(w => {
    let word = getCC(w)
    word.length > 2 ? results.push(word[0] + word.slice(-1) + word.slice(2,-1) + word[1]) : results.push(word)
  })
  return results.join(' ')
}; 