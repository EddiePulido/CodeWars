function parameter(n) {
  const arr = [...(n+"")].map(Number);
  
  const sum = arr.reduce((a,c) => a + c, 0);
  const prod = arr.reduce((a,c) => a * c, 1);
  
  let lcd = 0;
  
  for(let i = 1; i <= sum; i++){
    if(sum % i === 0 && prod % i === 0){
      lcd = i;
    }
  }
  
  return sum * prod / lcd;
}