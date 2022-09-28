function parse( data ){
  let sum = 0
  let arr = []
  
  for(let i = 0; i < data.length; i++){
    const char = data[i]
    switch(char){
        case 'i':
          sum++
          break;
        case 'd':
          sum--
          break;
        case 's':
          sum = Math.pow(sum, 2)
          break;
        case 'o':
          arr.push(sum)
          break;
        default:
          break;
    }
  }

  return arr
}
