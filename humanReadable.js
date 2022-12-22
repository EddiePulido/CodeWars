function humanReadable (s) {
  let result = []
  if(s >= 3600){
    result[0] = Math.floor(s/3600).toString()
    s = s % 3600
  }else{
    result[0] = '00'
  }
  if(s >= 60){
    result[1] = Math.floor(s/60).toString()
    s = s % 60
  }else{
    result[1] = '00'
  }
  
  result[2] = s.toString()
  
  return result.map(e => e.length == 2 ? e : '0' + e).join(':')  
  
}