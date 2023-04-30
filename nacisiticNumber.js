const num = readline()

print([...num].reduce((a,c) => a + (+c) ** num.length, 0) == num)