function remove (str) {
  const ex = [...str].filter(e => e === '!').join('')
  str = [...str].filter(e => e !== '!').join('')
  return str + ex
}