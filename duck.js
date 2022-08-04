function duckShoot(ammo, aim, ducks){
  let hits = Math.floor(ammo * aim)  
  ducks = ducks.split('')
  
  let count = 0
  for(let i = 0; i < ducks.length; i++){
      if(ducks[i] === '2' && count < hits){
          ducks[i] = 'X'
          count += 1
      }

  }
  return ducks.join('')
}