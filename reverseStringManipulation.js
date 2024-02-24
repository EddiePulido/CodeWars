for (let i = 0; i < 5; i++) {
  const [z,r,x] = readline().split(' ')

  print([...z].map((e,i)=>e == 1 ? x[i] : r[i]).join(''))
}
