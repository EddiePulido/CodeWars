const neutralise = (s1, s2) => {
  return [...s1].map((c,i) => {
    return { 
            '+-': 0,
            '-+': 0,
            '++': '+',
            '--': '-'
           }[c+s2[i]]
  }).join('')
}