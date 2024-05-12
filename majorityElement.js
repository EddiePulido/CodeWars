function majority(array, callback) {
	let count = 0
  
  for(const e of array){
    if(callback(e)) count++
  }
  
  return count > array.length / 2
}