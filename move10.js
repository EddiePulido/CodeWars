function moveTen(s){
  let a = 'abcdefghijklmnopqrstuvwxyz'
  return [...s].map(c => a[(a.indexOf(c) + 10) % 26]).join('')
}