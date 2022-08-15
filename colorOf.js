function colorOf(r,g,b){
  let a = [r.toString(16), g.toString(16), b.toString(16)]

  a = a.map(e => e.length === 1 ? '0' + e : e)

  return '#' + a[0] + a[1] + a[2]
}