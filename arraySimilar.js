function arraysSimilar(arr1, arr2) {
  arr1.sort()
  arr2.sort()
  
  console.log({arr1, arr2})
  
  let a1 = arr1.map(e => typeof e)
  let a2 = arr2.map(e => typeof e)
  
  return arr1.join('') === arr2.join('') && a1.join('') === a2.join('')
}