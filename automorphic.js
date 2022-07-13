function automorphic(n){
  let last = (n ** 2).toString().slice(-(n.toString().length))
  return +last === n ? 'Automorphic' : 'Not!!'
}