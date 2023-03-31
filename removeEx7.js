function remove (string) {
  return string.split(' ').filter(e => !e.includes('!') || e.indexOf('!') !== e.lastIndexOf('!')).join(' ')
}