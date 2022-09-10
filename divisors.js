function divisors(integer) {
  let arr = []
  
  for(let i = 2; i <= integer/2; i++){
    if(!(integer % i)) arr.push(i)
  }
  
  return !arr.length ? `${integer} is prime` : arr
};