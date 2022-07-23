function switcher(x){
  let a = ' ?!abcdefghijklmnopqrstuvwxyz'.split('').reverse('').join('')
  return x.map(n => a[+n -1]).join('')
}