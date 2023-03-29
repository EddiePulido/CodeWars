const isMonotone = arr => arr.join('') === arr.sort((a,b) => a - b).join('')
