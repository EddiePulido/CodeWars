n = readline()
print([...n].reduce((a, c) => a + +(n % c == 0), 0))
