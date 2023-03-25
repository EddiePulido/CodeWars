function isValidCoordinates(coordinates){
  const [lat,long] = coordinates.split(', ')
  
  const range = (lat, long) => lat >= -90 && lat <= 90 && long >= -180 && long <= 180
  const digits = (coor, d='1234567890-.') => {
    return [...coor].every(e => d.includes(e))
  }
  
  return range(lat, long) && digits(lat) && digits(long)
}