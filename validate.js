function validateUsr(username) {
  const allowed = 'abcdefghijklmnopqrstuvwxyz0123456789_'
  return username.split('').filter(c => allowed.includes(c)).join('') === username && username.length >= 4 && username.length <= 16
}