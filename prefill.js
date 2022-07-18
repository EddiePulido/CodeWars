function prefill(n, v) {
  console.log({n}, {v})
  if(isNaN(n) || n % 1 !== 0 || n === Infinity || n === -Infinity || n < 0 || typeof n === 'boolean'){
    throw new TypeError(`${n} is invalid`)
  } 
  return new Array(+n).fill(v)
}