function translateToAlienLanguage(str) {
  const vowels = 'aeiou'
  str = str.toLowerCase()
  return str.split(' ').map(word => {
    return [...word].map(c=> vowels.includes(c) ? c + c : c)
                    .reverse()
                    .join('')
  }).join(' ')
}
