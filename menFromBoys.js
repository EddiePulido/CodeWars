function menFromBoys(arr){
  console.log({arr})
  const evs = arr.filter(n => !(n % 2)).sort((a,b) => a - b)
  const odds = arr.filter(n => n % 2).sort((a,b) => b - a)
  
  return Array.from(new Set(evs.concat(odds)))
}