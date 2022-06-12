function spinWords(string){
  return string.split(' ').map(a =>  {return a.length > 4 ? a.split('').reverse().join('') : a}).join(' ')
}