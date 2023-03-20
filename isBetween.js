function ipsBetween(start, end){
  const calcIP = address => {
    return address.split('.').reduce((a,c,i,arr) => {
      return a + +c * (256 ** (arr.length - 1 - i))
    }, 0)
  }
  
  return calcIP(end) - calcIP(start)
}