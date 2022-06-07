function duplicateEncode(word){
  let result = ''
  word.split('').forEach(char => {
    const c = char.toLowerCase()
    if(word.toLowerCase().indexOf(c) === word.toLowerCase().lastIndexOf(c)){
      result += '('
    }else{
      result += ')'
    }
  })
  console.log({word})
  return result
}
