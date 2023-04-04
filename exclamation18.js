function slot(s){
  
  const slots = {
    '!!!!!' : 1000,
    '?????' : 1000,
    '!!!!' : 800,
    '????' : 800,
    '!!!??' : 500,
    '???!!' : 500,
    '!!???' : 500,
    '??!!!' : 500,
    '!!!' : 300,
    '???' : 300,
  }
  
  for(k in slots){
    if(s.includes(k)) return slots[k]
  }
  
  const ex = [...s].reduce((a,c,i,arr) => c == '!' && arr[i-1] == '!'? ++a : a, 0)
  const q = [...s].reduce((a,c,i,arr) => c == '?' && arr[i-1] == '?' ? ++a : a, 0)
  console.log({s, ex, q})
  
  if(ex + q === 2) return 200
  
  if(s.includes('!!') || s.includes('??')) return 100
  
  return 0
}