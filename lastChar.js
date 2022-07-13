function last(x){
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  
  return x.split(' ').sort((a,b) => alpha.indexOf(a.slice(-1)) - alpha.indexOf(b.slice(-1)))
}