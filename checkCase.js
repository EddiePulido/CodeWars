const m = readline()
const letter = c => c.toLowerCase() !== c.toUpperCase()

console.log(m.includes('_') ? 'snake_case' : m[0] === m[0].toUpperCase() ? 'PascalCase' : 'camelCase')
