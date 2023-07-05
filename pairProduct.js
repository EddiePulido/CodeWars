const pairProduct = (numbers, product) => {
  const hash = {}
  
  for(let i = 0; i < numbers.length; i++){
    let num = numbers[i]
    if(hash[num]) return [hash[num], i]
    hash[product / num] = i
  }
};