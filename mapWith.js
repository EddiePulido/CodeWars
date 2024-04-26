function mapWith(array, callback) {
	const arr = []
  
  array.forEach((e) => {
    arr.push(callback(e))
  })
}