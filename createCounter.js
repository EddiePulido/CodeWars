const createCounter = (init) => {
	let counter = init
	return {
		increment: () => ++counter,
		reset: () => ((counter = init), counter),
		decrement: () => --counter,
	}
}
