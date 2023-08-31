const reverseMessage = str => {
  str = [...str].reverse().join('')
  return str.split(' ').map(cap).join(' ')
}

const cap = word => word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : ''