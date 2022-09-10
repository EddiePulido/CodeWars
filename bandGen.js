function bandNameGenerator(str) {
  let cap = str[0].toUpperCase() + str.slice(1)
  return str[0] === str.slice(-1) ? 
         cap.slice(0,-1) + str : 'The ' + cap
}