const createFunctions = (n, s = n) => {
	if (!n) return []

	return [() => s - n, ...createFunctions(n - 1, s)]
}
