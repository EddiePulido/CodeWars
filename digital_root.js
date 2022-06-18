function digital_root(n) {
  let str = n.toString()
  
  while(str.length != 1){
    str = [...str].reduce((acc,c) => acc + Number(c), 0).toString()
  }
  
  return Number(str)
}