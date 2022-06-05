function findUniq(arr) {
  let unique
  
  arr.forEach(num => {
    if(arr.indexOf(num) === arr.lastIndexOf(num)) unique = num
  })
  
  return unique
}
