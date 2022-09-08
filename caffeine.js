function caffeineBuzz(n){
  if(n % 3 === 0 && n % 4 === 0) return 'CoffeeScript'
  if(n % 2 === 0 && n % 3 === 0) return 'JavaScript'
  if(n % 3 === 0) return 'Java'
  return "mocha_missing!"
} 