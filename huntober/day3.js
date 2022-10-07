const space = (str) => {
  let keys = 'Space'
  return str.split('').map(e => keys.includes(e) ? ' ' : e).join('')
}

console.log(space('helloSthere'))