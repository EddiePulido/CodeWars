function commutative(func1, func2, value) {
	return func1(func2(value)) === func2(func1(value))
}