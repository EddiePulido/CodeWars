const uncompress = (s) => {
  let nums = []
  let chars = []
  let digits = '0123456789'
  
  let str = ''
  
  let i = 0
  let num = ''
  
  for(c of s){
    if(digits.includes(c)){
      num += c
    }else{
      str += c.repeat(+num)
      num = ''
    }
  }
  
  return str
}