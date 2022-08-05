function validateHello(greetings) {
  
  const arr = [
    "hello",
    "ciao",
    "salut",
    "hallo",
    "hola",
    "ahoj",
    "czesc",
  ]
  
  greetings = greetings.toLowerCase()
  
  let bool = false
  
  for(w of arr) if(greetings.includes(w)) bool = true
  
  return bool
}