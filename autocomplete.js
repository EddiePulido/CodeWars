function autocomplete(input, dictionary){
  const alpha = "abcdefghijklmnopqrstuvwxyz"
  input = input.split('').filter(e => alpha.includes(e)).join('')
  return dictionary.filter(e => e.slice(0,input.length).toLowerCase() === input.toLowerCase()).slice(0,5)
} 