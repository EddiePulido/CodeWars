function flyBy(lamps, drone){
  lamps = lamps.split('')
  
  if(drone.length >= lamps.length){
    return 'o'.repeat(lamps.length)
  }
  
  for(let i = 0; i < drone.length; i++){
    lamps[i] = 'o'
  }
  
  return lamps.join('')
}