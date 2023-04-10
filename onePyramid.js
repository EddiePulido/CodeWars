function pyramid(n) {
  const arr = []
  
  for(let i = 1; i <= n; i++) arr.push(new Array(i).fill(1))
    
  return arr
}

const pyramid = n => [...Array(n)].map((e,i) => [...Array(i+1).fill(1)])