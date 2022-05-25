function oddOrEven(n) {
  if(n % 2 === 1){
    return EITHER
  }
  
  const map = {
    0 : EVEN,
    1 : ODD
  }
  
  console.log(n)
  return map[n/2 % 2]
}