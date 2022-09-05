function removeExclamationMarks(s) {
  while(s.includes('!')){
    s = s.replace('!','')
  }
  return s
}