function reduce(array, callback, initialValue) {
	let acc = initialValue || array[0]
  for(let i = 0; i < array.length; i++){
    acc = callback(acc, array[i], i, array)
  }
  
  return acc
}