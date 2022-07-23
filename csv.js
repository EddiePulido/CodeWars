function toCsvText(array) {
  // good luck
 let result = [];
 
 array.forEach(arr =>{
   result.push(arr.join(','))
 })
 
 return result.join('\n');
}