function countBy(array, callback) {
	const map = {}
  
  for(const e of array){
    const result = callback(e)
    map[result] = ++map[result] || 1
  }
  
  return map
}