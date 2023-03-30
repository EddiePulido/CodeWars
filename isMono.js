const isMonotone = arr => arr.join('') === arr.sort((a,b) => a - b).join('')
const isMonotone = arr => arr.every((n, i) => n >= (arr[i-1] || n - 1))
