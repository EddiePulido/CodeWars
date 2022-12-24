function aliasGen(a,b){
  let first = firstName[a[0].toUpperCase()]
  let sur = surname[b[0].toUpperCase()]
  if(!first || !sur) return 'Your name must start with a letter from A - Z.'
  
  return `${first} ${sur}`
}