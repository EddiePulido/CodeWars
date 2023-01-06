function consonantCount(str) {
  let v = 'aeiouAEIOU'
  const isChar = c => c.toLowerCase() !== c.toUpperCase()
  return [...str].filter(e => !v.includes(e) && isChar(e)).length
}