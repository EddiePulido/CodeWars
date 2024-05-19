function rating(arrOfFuncs, value) {
	const arr = arrOfFuncs.filter(e => e(value))
  
  return arr.length * 100 / arrOfFuncs.length
}