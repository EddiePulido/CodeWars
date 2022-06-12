const cap = (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()

function titleCase(title, minorWords = '') {
  if(!title) return ''
  
  const titleArr = title.split(' ')
  const minorArr = minorWords.toLowerCase().split(' ')
  
  return titleArr.map((word, i) => {
    if(i === 0) return cap(word)
    if(minorArr.includes(word.toLowerCase())) return word.toLowerCase()
    return cap(word)
  }).join(' ')
}
