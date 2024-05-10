function objectFilter(obj, callback) {
	const map = {}
  
  for(const key in obj){
    if(obj[key] === callback(key)){
      map[key] = obj[key]
    }
  }
  
  return map
}
