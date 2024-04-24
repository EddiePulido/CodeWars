function map(array, callback) {
	const arr = []
  
  for(let i = 0; i < array.length; i++){
    arr.push(callback(array[i]))
  }
  
  return arr
}

console.log(map([1, 2, 3], addTwo));