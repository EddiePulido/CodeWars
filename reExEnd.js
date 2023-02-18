function remove (str) {
  let last = str.length - 1
  
  while(str[last] === '!') last--
  
  return [...str].filter(e => e !== '!').join('') + str.slice(last+1)
}