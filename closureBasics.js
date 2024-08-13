function buildFun(n) {
	var res = []

	for (var i = 0; i < n; i++) {
		const x = i
		res.push(function () {
			return x
		})
	}
	return res
}
