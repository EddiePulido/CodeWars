function objOfMatches(array1, array2, callback) {
	const f = (a,c,i) => {
    if(callback(c) === array2[i]){
      a[c] = array2[i]
    }
    
    return a
  }
  
  return reduce(array1, f, {})
}