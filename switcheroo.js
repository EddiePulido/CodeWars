function switcheroo(x){
  return [...x].map(c => {
    if(c === 'a') return 'b'
    if(c === 'b') return 'a'
    return c
  }).join('')
}

console.log(switcheroo('ab')) // 'ba'