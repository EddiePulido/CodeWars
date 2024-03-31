function nextHigher(n) {
  const ones = countOnes(n)
  n++
  
  while(countOnes(n) !== ones) n++
  
  return n
}

const countOnes = n => [...n.toString(2)].reduce((a,c) => a + +(c==1),0)