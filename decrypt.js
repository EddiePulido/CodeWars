const text = readline();

const isChar = c => c.toUpperCase() != c.toLowerCase()

print([...text].filter(c => isChar(c) && c == c.toUpperCase()).join('').toLowerCase())