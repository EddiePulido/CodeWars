var number = function(busStops){
  let peeps = 0
  
  for(let i = 0; i < busStops.length; i++){
    peeps += busStops[i][0] - busStops[i][1]
  }
  return peeps < 0 ? 0 : peeps
}