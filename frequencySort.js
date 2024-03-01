// function solve(arr){
//   const freq = arr.reduce((a,c) => (a[c] = ++a[c] || 1, a), {})
  

//   arr.sort((a,b) => {
//     if(freq[a] === freq[b]){
//       return a - b
//     }
    
//     return freq[b] - freq[a]
//   })
  
//   return arr
// }

function solve(arr){
  const freq = arr.reduce((a,c) => (a[c] = ++a[c] || 1, a), {})
  
  return arr.sort((a,b) => freq[a] === freq[b] ? a - b : freq[b] - freq[a]) 
}