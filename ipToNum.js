function ipToInt32(ip){
  return parseInt(ip.split('.').reduce((a,c) =>{
    let bin = (+c).toString(2)
    bin = '0'.repeat(8 - bin.length) + bin
    return a + bin
  },''), 2)
}