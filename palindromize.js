function palindromize(number){
  let count = 0
  
  while(!isPal(number)){
    count++
    const rev = +[...(number+'')].reverse().join('')
    number += rev
  }
  
  return `${count} ${number}`
}

const isPal = n => n = +([...(n+'')].reverse().join('')) === n
