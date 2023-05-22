const x = readline().toLowerCase()
print([...x].reduce((a,c) => c === 'e' ? ++a : a, 1))