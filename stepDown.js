function stepDown(stair, width) {
	if (!width) return []
	if (stair < width) return [stair]

	return [...stepDown(stair - width, width), stair]
}
