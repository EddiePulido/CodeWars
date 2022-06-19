function remove (string) {
  let str = ''
  string.split('').forEach(c => {if(c != '!') str += c})
  return str + '!'
}