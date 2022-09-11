function nicknameGenerator(name){
  if(name.length < 4) return 'Error: Name too short'
  
  const v = 'aeiou'
  
  if(v.includes(name[2])) return name.slice(0,4)
  
  return name.slice(0,3)
}