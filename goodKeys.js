function goodKeys(obj, callback) {
  const result = []
  
	for(const key in obj){
    if(callback(obj[key])) result.push(key)
  }
  
  return result
}