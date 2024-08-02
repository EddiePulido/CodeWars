function multiMap(arrVals, arrCallbacks) {
	const f = (a, c) => {
		a[c] = []
		for (const cb of arrCallbacks) {
			a[c].push(cb(c))
		}
		return a
	}

	return reduce(arrVals, f, {})
}
