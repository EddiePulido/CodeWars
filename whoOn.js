const whosOnline = (friends) => {
  const names = a => a.map(e=>e.username)
  
  const on = names(friends.filter(e => e.status == 'online' && e.lastActivity <= 10))
  const off = names(friends.filter(e => e.status == 'offline'))
  const away = names(friends.filter(e => e.status == 'online' && e.lastActivity > 10))
  
  const result = {}
  
  if(on.length) result.online = on
  if(off.length) result.offline = off
  if(away.length) result.away = away
  
  return result
}

const whosOnline = (friends) => {
  return friends.reduce((a,c) => {
    let status = c.status
    if(c.lastActivity > 10 && status == 'online') status = 'away'
    a[status] ? a[status].push(c.username) : a[status] = [c.username]
    return a
  },{})
}