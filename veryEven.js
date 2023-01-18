function isVeryEvenNumber(n) {
  while(n.toString().length > 1){
    n = [...(n+'')].reduce((a,c) => a + +c, 0)
  }
  return n % 2 === 0
}