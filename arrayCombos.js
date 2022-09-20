function solve(arr) {
  let total = 1
  for(a of arr){
    total *= (new Set(a)).size 
    console.log(total) 
  }
  return total 
};