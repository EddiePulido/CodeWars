const searchNames = logins => {
  return logins.filter(user => user[0].slice(-1) === '_')
}