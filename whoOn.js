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