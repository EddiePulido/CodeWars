function pipe(arrOfFuncs, value) {
	return arrOfFuncs.reduce((a,c) => {
    return c(a)
  }, value)
}