function alphabetPosition(text) {
  let txt = text.toLowerCase()
  
  let txt1 = ''
  
  for(let i = 0; i < txt.length; i++){
    let code = txt.charCodeAt(i) - 96
    
    if(code > 0 && code < 27){
      txt1 += code + ' '
    }
  }
  
  return txt1.trim()
}