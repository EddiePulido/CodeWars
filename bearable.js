function bareable(heat, humidity){
  if(humidity > 0.5 || heat >= 36) return false
  if(heat > 25 && humidity > 0.4) return false
  return true
}