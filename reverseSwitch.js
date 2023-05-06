for (let i = 0; i < 16; i++) {
  const line = readline();
  print([...line].map(e => e == 1 ? '#' : ' ').join(''))
}