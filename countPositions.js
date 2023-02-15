const n = parseInt(readline())
const isChar = c => c.toLowerCase() != c.toUpperCase()

for (let i = 0; i < n; i++) {
    const l = readline().toLowerCase()
    print([...l].reduce((a,c) => !isChar(c) ? a : a + c.charCodeAt()-96, 0))
}
