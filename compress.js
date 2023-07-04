const compress = (s) => {
  let str = ''
  
  for(let i = 0; i < s.length; i++){
    let c = s[i]
    let num = 0
    while(s[i] === c){
      num++;
      i++;
    }
    str += num === 1 ? c :  num + c
    i--;
  }
  
  return str
};