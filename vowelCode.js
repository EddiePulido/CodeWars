const en = {
  a : 1,
  e : 2,
  i : 3,
  o : 4,
  u : 5,
}

const de = {
  '1' : 'a',  
  '2' : 'e',  
  '3' : 'i',  
  '4' : 'o',  
  '5' : 'u',  
}

function encode(string) {
  return [...string].map(c => en[c] || c).join('')
}

function decode(string) {
  return [...string].map(c => de[c] || c).join('')
}