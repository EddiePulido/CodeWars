const change = s => {  
  if(s.slice(-1) === 'i') s = s.slice(0,-1) + 'y'
  s = s.slice(0,-1).replaceAll('y','i') + s.slice(-1)
  return s[0].toUpperCase() + s.slice(1)
}

const N = parseInt(readline());
for (let i = 0; i < N; i++) {
  const L = readline()
  print(change(L))
}