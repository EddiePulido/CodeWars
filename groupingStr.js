const isConsecutive = str => {
  const filter = [...str].filter((e,i) => e !== str[i-1]).join('')
  const set = [...new Set(str)].join('')
  
  return filter === set
}