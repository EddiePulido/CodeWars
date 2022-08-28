function reverseNumber(n) {
  if(n < 0){
    return -Number(n.toString().slice(1).split('').reverse().join(''))
  }
  
  return Number(n.toString().split('').reverse().join(''))
}