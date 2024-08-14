///Here is my code below
function hobbyTracker(hobbies) {
	const cache = {}

	for (const hobby of hobbies) {
		cache[hobby] = 0
	}

	return (hobby, num) => {
		if (hobby && num) {
			cache[hobby] += num
			return cache
		}

		for (const hobby of hobbies) {
			cache[hobby] = 0
		}

		return 'tracker has been reset!'
	}
}
