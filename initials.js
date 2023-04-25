const initials = n => {
  const u = s => s[0].toUpperCase()
  return n.split(' ').map((e,i,a) => a[i+1] ? u(e) : u(e) + e.slice(1)).join('.')
}